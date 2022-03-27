from django import forms
from .models import NSEData



class NSEDataForm(forms.ModelForm):
    """
    Form to upload file to Create new records or delete records.
    """

    class Meta:
        model = NSEData
        fields = ['file_data']
