from django.urls import path 
from . import views

#urlpatterns=[
#    path('', views.HelloApiView.as_view(), name='index'),
#]

urlpatterns=[
    path('addcourse', views.add_post, name='addcourse_post'),
    path('courselist', views.list_post, name='course_post'),
    # path('user', views.list_users, name='list_users'),
]