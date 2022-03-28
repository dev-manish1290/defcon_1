from pyexpat import model
from urllib import response
from django.shortcuts import render, redirect
from django.views.generic import CreateView, ListView, View
from django.core.paginator import Paginator
from django.core.paginator import EmptyPage
from django.core.paginator import PageNotAnInteger
from django.core.management import call_command

from .models import NSEData, NSESymbol, NSEDailyData
from .forms import NSEDataForm


def index(request):
    template = "dashboard/index.html"
    return render(request, template,{'main_user':"True"})

class NSEDataCreateView(CreateView):
    model = NSEData
    form_class = NSEDataForm
    success_url = '/dashboard/upload_nse'
    template_name = 'dashboard/upload_data.html'

    def form_valid(self, form):
        try:
            uploaded = form.save(commit=False)
            uploaded.save()
            return redirect('/')
        except Exception as e:
            print(str(e))
            return super(NSEDataCreateView, self).form_invalid(form)

class NSEUploadListView(ListView):
    model = NSEData
    template_name = 'dashboard/nse_data_list.html'
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(NSEUploadListView, self).get_context_data(**kwargs)
        user_data = NSEData.objects.all()
        paginator = Paginator(user_data, self.paginate_by)
        page = self.request.GET.get('page')
        try:
            user_data = paginator.page(page)
        except PageNotAnInteger:
            user_data = paginator.page(1)
        except EmptyPage:
            user_data = paginator.page(paginator.num_pages)
        context['upload_json'] = user_data
        return context

class ExecuteUploadedFile(View):
     def post(self, request, pk, *args, **kwargs):
         call_command('load_nse_data', fileid=pk)
         return redirect('index')

class NseSymbolListView(ListView):
    model = NSESymbol
    template_name = 'dashboard/nse_symbol_list.html'
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(NseSymbolListView, self).get_context_data(**kwargs)
        user_data = NSESymbol.objects.all()
        paginator = Paginator(user_data, self.paginate_by)
        page = self.request.GET.get('page')
        try:
            user_data = paginator.page(page)
        except PageNotAnInteger:
            user_data = paginator.page(1)
        except EmptyPage:
            user_data = paginator.page(paginator.num_pages)
        context['upload_json'] = user_data
        return context

class NSESymbolDetailView(View):
    def get(self, request, *args, **kwargs):
        symbol_data = NSEDailyData.objects.filter(symbol_id = kwargs['pk'])
        symbol_date = [x.timestamp.strftime("%Y-%m-%d") for x in symbol_data]
        symbol_close = [x.close for x in symbol_data]
        context = {'symbol_data': symbol_data, 'symbol_date':symbol_date, 'symbol_close':symbol_close,'symbol_name':symbol_data[0].symbol}
        return render(request, 'dashboard/nse_symbol_detail.html', context)

