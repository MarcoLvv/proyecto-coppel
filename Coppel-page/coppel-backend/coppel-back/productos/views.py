from rest_framework import viewsets
from .productosSerializer import ProductosSerializer
from .models import Productos
# Create your views here.

# class ProductoView(viewsets.ModelViewSet):
#     serializer_class = ProductosSerializer
#     queryset = Productos.objects.filter('nombre')
#     # queryset = Productos.objects.all()

class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductosSerializer
    def get_queryset(self):
        nombre_a_buscar = self.request.query_params.get('nombre_a_buscar', None)
        if nombre_a_buscar:
            return Productos.objects.filter(nombre__icontains=nombre_a_buscar)
        else:
            return Productos.objects.all()


    # def get_queryset(self):
    #     nombre_a_buscar = self.request.query_params.get('nombre', None)
    #     if nombre_a_buscar is not None:
    #         queryset = Productos.objects.filter(nombre=nombre_a_buscar)
    #     else:
    #         queryset = Productos.objects.all()
    #     return queryset