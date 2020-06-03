using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Presentacion10
{
    class Program
    {
        static void Main(string[] args)
        {
            /*int[,] matriz = new int[3,3];

            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.WriteLine("Dame el valor {0}, {1}", i, j);
                    matriz[i, j] = Convert.ToInt32(Console.ReadLine());
                }
            }

            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Console.WriteLine("El valor de la posición {0}, {1} es: {2}", i, j, matriz[i, j]);
                }
            }

            Console.ReadKey();*/

            int[][] matriz = new int[3][];
            matriz[0] = new int[1];
            matriz[1] = new int[3];
            matriz[2] = new int[2];

            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < matriz[i].Length; j++)
                {
                    Console.WriteLine("Dame el valor {0}, {1}", i, j);
                    matriz[i][j] = Convert.ToInt32(Console.ReadLine());
                }
            }

            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < matriz[i].Length; j++)
                {
                    Console.WriteLine("El valor de la posición {0}, {1} es: {2}", i, j, matriz[i][j]);
                }
            }

            Console.ReadKey();
        }
    }
}
