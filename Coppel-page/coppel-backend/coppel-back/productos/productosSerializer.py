from rest_framework import serializers
from .models import Productos
class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        # para llamar a todos
        fields = '__all__'

        # para seleccionar 
        #exclude = ['imagen']