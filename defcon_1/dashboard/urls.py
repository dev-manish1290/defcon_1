from django.urls import path,include
from dashboard import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('',views.NseSymbolListView.as_view(), name = 'index'),
    path('upload',views.NSEUploadListView.as_view(), name = 'upload'),
    path('upload_nse/', views.NSEDataCreateView.as_view(), name='upload_nse'),
    path('execute/<int:pk>', views.ExecuteUploadedFile.as_view(), name='execute'),
    path('symbol/<int:pk>', views.NSESymbolDetailView.as_view(), name='symbol'),
]
