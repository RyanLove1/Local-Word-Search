from . import views
from django.conf.urls import url

urlpatterns = [
    url(r"^word", views.word),
    url(r"", views.word),
]