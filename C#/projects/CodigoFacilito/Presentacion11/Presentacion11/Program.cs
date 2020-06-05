using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentacion11
{
    class Program
    {
        static int[] arreglo = { 1, 2, 3, 4, 5, 6, -1 };
        static void Main(string[] args)
        {
            Console.WriteLine("Dame un valor a buscar en el arreglo:");
            int valorBuscar = Convert.ToInt32(Console.ReadLine());

            ref int valor = ref BuscarValores(valorBuscar);

            if (valor != -1)
            {
                Console.WriteLine("EL valor encontraod es {0}", valor);
            }
            else
            {
                Console.WriteLine("No se encontro valor");
            }

            Console.ReadKey();
        }

        public static ref int BuscarValores(int valor)
        {
            for (int i = 0; i < 6; i++)
            {
                if (arreglo[i] == valor)
                {
                    return ref arreglo[i];
                }
            }

            return ref arreglo[6];
        }
    }
}
