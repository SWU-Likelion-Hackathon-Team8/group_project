from django.urls import path
from . import views

#http://logalhost/board/
app_name = 'board'
urlpatterns = [
    path('', views.board_list, name='board_list')
]