from django.urls import path, include
from django.views.generic import RedirectView

from app import views

urlpatterns = [
    path('', views.index),
    path('else', views.index, name='nav'),
    path('About Us', views.aboutUs),
    path('Contact Us', views.sendUsingSendGrid),
    path('Home', RedirectView.as_view(url='/'), name='home'),
    path('wines', views.wines, name='wines'),
    path('Wine Coolers Spritzers', views.winecoolers, name='winecoolers'),
]

