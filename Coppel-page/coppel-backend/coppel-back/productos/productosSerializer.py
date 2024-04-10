from rest_framework import serializers
from .models import Productos
class ProductosSerializer(serializers.ModelSerializer):
    class meta:
        model = Productos
        # para seleccionar 
        exclude = ['imagen']

        # para llamar a todos
        # fields = '__all__'