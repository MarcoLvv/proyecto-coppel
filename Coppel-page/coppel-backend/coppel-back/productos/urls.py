from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from productos import views

#api versioning
# Crear un router y registrar la vista ProductoView
router = routers.DefaultRouter()
router.register(r'productos', views.ProductoView, 'productos')
# Incluir las URLs del router en las URLs de la aplicación
urlpatterns =[
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Productos API") )


]