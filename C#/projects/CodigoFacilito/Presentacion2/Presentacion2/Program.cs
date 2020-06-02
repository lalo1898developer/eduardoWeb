using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentacion2
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;

            decimal x = 0.0m; //utilizo modificador "m"
            float f = 0.0f; //utilizo modificador "f"
            double d = 0.0D; //utilizo modificador "D"

            string cadena = "Hola mundo";

            bool bandera = false;

            DateTime fecha = DateTime.MinValue;

            //Presento los valores
            Console.WriteLine("El valor de i es: {0}", i);
            Console.WriteLine("El valor de x es: {0:C}", x); //para formato tipo moneda es con la letra "C"
            Console.WriteLine("El valor de f es: {0:F2}", f); //para formato decimal es con la letra "f" y puedo seleccionar cuantos decimales quiero
            Console.WriteLine("El valor de d es: {0:F2}", d);
            Console.WriteLine("EL valorde la cadena es: " + cadena);
            Console.WriteLine("El valor de bandera es: " + bandera.ToString());
            Console.WriteLine("El valor de fecha es: " + fecha.ToShortDateString());

            Console.ReadKey();
        }
    }
}
