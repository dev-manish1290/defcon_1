from pyexpat import model
from statistics import mode
from django.db import models

class MandiData(models.Model):
    timestamp = models.CharField(max_length = 500)
    state = models.CharField(max_length = 500)
    district = models.CharField(max_length = 500)
    market = models.CharField(max_length = 500)
    commodity = models.CharField(max_length = 500)
    variety = models.CharField(max_length = 500)
    arrival_date = models.CharField(max_length = 500)
    min_price = models.CharField(max_length = 500)
    max_price = models.CharField(max_length = 500)
    modal_price = models.CharField(max_length = 500)

class NSEData(models.Model):
    title = models.CharField(max_length=200)
    file_data = models.FileField(upload_to='nse_zip_file')
    is_processed = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)
    
    def get_absolute_url(self):
        return self.file_data.url

    def get_file_name(self):
        try:
            return self.file_data.name.split("/")[-1]
        except Exception:
            return ""

class NSESymbol(models.Model):
    symbol_name = models.CharField(max_length=1000)
    series = models.CharField(max_length=4, null=True)
    isin = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.symbol_name

class NSEDailyData(models.Model):
    symbol = models.ForeignKey(NSESymbol, on_delete=models.CASCADE)
    open = models.CharField(max_length=20, null=True)
    high = models.CharField(max_length=20, null=True)
    low = models.CharField(max_length=20, null=True)
    close = models.CharField(max_length=20, null=True)
    last = models.CharField(max_length=20, null=True)
    prev_close = models.CharField(max_length=20, null=True)
    tot_trd_qty = models.CharField(max_length=20, null=True)
    tot_trd_val = models.CharField(max_length=20, null=True)
    tot_trd = models.CharField(max_length=20, null=True)
    timestamp = models.DateField()
    def __str__(self):
        return f"{self.symbol}, {self.timestamp}"


    