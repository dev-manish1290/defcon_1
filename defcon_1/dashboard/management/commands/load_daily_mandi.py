from django.core.management.base import BaseCommand, CommandError
from dashboard.models import MandiData
import requests

class Command(BaseCommand):
    help = 'Load Daily Mandi Rates Across States'

    def handle(self, *args, **options):
        load = True
        limit = 10
        offset = 0
        while load:
            headers = {'accept': 'application/json',}
            params = (
                        ('api-key', '579b464db66ec23bdd0000014fc0e08039bb491b4a9129c945427da7'),
                        ('format', 'json'),
                        ('offset', offset),
                        ('limit', limit),
                    )
            response = requests.get('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070', headers=headers, params=params)
            if response.status_code == 200:
                mandi_data = response.json()['records']
                if mandi_data:
                    offset += 10
                    django_list = [MandiData(**vals) for vals in mandi_data]
                    # Bulk Create / Insert data to database
                    MandiData.objects.bulk_create(django_list)
                else:
                    print('Data load completed')
                    break

