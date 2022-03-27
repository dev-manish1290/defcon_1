from django.contrib import admin
from .models import NSEData, NSESymbol, NSEDailyData

# Register your models here.

admin.site.register(NSEData)
admin.site.register(NSESymbol)

@admin.register(NSEDailyData)
class NSEDailyDataAdmin(admin.ModelAdmin):
    list_display = ("symbol", "timestamp", "open", "close")
    search_fields = ['symbol','timestamp']
