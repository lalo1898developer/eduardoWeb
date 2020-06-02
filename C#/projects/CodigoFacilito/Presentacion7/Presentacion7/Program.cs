using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentacion7
{
    class Program
    {
        static void Main(string[] args)
        {
            int? x = null;
            int y;
      
            /*if (x.HasValue)
                Console.WriteLine("El valor de x es: " + x.ToString());
            else
                Console.WriteLine("EL valor de x es nulo");*/

            string cadena = x.HasValue ? "El valor de x es: " + x.ToString() : "EL valor de x es nulo";

            y = x ?? -1; //En caso de que x tenga valor, se la asignara el valor. En caso contraria le dara "-1"

            Console.WriteLine(cadena);
            Console.WriteLine("El valor de y es: {0}", y);

            Console.ReadKey();
        }
    }
}
