using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace LibreriaProductos
{
    public class Productos
    {
        #region Propiedades
        public int idProducto { get; set; }
        public string Clave { get; set; }
        public string Descripcion { get; set; }
        public string CodigoBarras { get; set; }
        #endregion

        #region Constructor
        public Productos() {}
        
        public Productos(int id, string clave, string descripcion, string codigo)
        {
            idProducto = id;
            Clave = clave;
            Descripcion = descripcion;
            CodigoBarras = codigo;
        }
        #endregion

        #region Metodos

        #endregion
    }
}