import { Product } from "./product.interface";

export interface Respuesta {
  codigo?: string;
  detalles?: string[];
  folio: string;
  info?: string;
  mensaje: string;
  resultado: {
    productos: Product[];
  };
}
