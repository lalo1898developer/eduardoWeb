using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LibreriaProductos;

namespace Presentacion8
{
    class Program
    {
        static void Main(string[] args)
        {
            Productos Producto, Producto2;
            Producto = new Productos();

            Producto.idProducto = 1;
            Producto.Clave = "P0001";
            Producto.Descripcion = "REF NARANJA 600 ML";
            Producto.CodigoBarras = "123456789";

            Producto2 = new Productos(2, "P0002", "REF TORONJA 600ML", "98765432");

            Console.WriteLine("Los datos del producto son: ");
            Console.WriteLine("id: {0}", Producto.idProducto);
            Console.WriteLine("Clave: {0}", Producto.Clave);
            Console.WriteLine("Descripción: {0}", Producto.Descripcion);
            Console.WriteLine("Codigo de Barras: {0}", Producto.CodigoBarras);

            Console.WriteLine("Los datos del segundo producto son: ");
            Console.WriteLine("id: {0}", Producto2.idProducto);
            Console.WriteLine("Clave: {0}", Producto2.Clave);
            Console.WriteLine("Descripción: {0}", Producto2.Descripcion);
            Console.WriteLine("Codigo de Barras: {0}", Producto2.CodigoBarras);

            Console.ReadKey();
        }
    }
}
