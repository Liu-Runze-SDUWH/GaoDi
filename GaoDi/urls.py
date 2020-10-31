from django.contrib import admin
from django.urls import include, path
from django.views.generic.base import TemplateView
from django.conf.urls import url
import django.views.static as static
from GaoDi.settings import STATIC_ROOT

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/',include('server.urls')),
    url(r'^static/(?P<path>.*)$', static.serve,{'document_root': STATIC_ROOT}, name='static'),
]