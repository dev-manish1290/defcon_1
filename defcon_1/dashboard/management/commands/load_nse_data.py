from itertools import count
import os, csv, io
from django.core.management.base import BaseCommand
from django.conf import settings
from dashboard.models import NSEData, NSESymbol, NSEDailyData
from datetime import datetime


class Command(BaseCommand):
	help = 'Used for fetch RIC, MIC, ISIN data from DB'

	def add_arguments(self, parser):
		parser.add_argument('-f', '--fileid',
		action='store',
		dest='file_id',
		default='',
		help='Uploaded File ID')

	def handle(self, *args, **options):
		'''To Do Read csv stored in Models, call proc for only unique RICS for TR'''

		try:
			file_id = int(options['file_id'])
			qs = NSEData.objects.get(id=file_id,is_processed=False)

			if not os.path.isfile(qs.file_data.path):
				print('file not found')
				qs.is_processed = True
				qs.save()
			else:
				data = qs.file_data.read().decode('UTF-8')
				io_string = io.StringIO(data)
				csv_data = csv.reader(io_string, delimiter=',')

				csv_header = next(csv_data)
				csv_header = list(map(lambda x:x.upper(), csv_header))
				csv_data_list = [dict(zip(csv_header, x)) for x in csv_data]
				bulk_csv_data = []
				for rec in csv_data_list:
					if rec.get('SYMBOL',None):
						g, c = NSESymbol.objects.get_or_create(symbol_name = rec['SYMBOL'], series = rec['SERIES'], defaults = {'isin': rec['ISIN']})
						if g:
							time_stamp = datetime.strptime(rec['TIMESTAMP'], '%d-%b-%Y')
							bulk_csv_data.append(NSEDailyData(
								symbol = g,
								open = rec.get('OPEN',0),
								high = rec.get('HIGH',0),
								low = rec.get('LOW',0),
								close = rec.get('CLOSE',0),
								last = rec.get('LAST',0),
								prev_close = rec.get('PREVCLOSE',0),
								tot_trd_qty = rec.get('TOTTRDQTY',0),
								tot_trd_val = rec.get('TOTTRDVAL',0),
								tot_trd = rec.get('TOTALTRADES',0),
								timestamp = time_stamp
							))
				if bulk_csv_data:
					NSEDailyData.objects.bulk_create(bulk_csv_data, ignore_conflicts=True)
				qs.is_processed = True
				qs.save()
							
		except Exception as e:
			qs.is_processed = True
			qs.save()
			print(str(e))
			print('Invalid file id.')
