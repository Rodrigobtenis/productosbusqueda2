import React, { useState } from 'react';
import Select from 'react-select';
import "./ProductosBusqueda.css";




const ProductList = () => {
    const [clientName, setClientName] = useState('');
  const [products] = useState([
    { id: 1, name: 'Filos Microblading x unidad 18U 0.18, 18U 0.25, 16 angulares', price: 270 },
    { id: 2, name: 'Filos Microshading x unidad 17R y 21R', price: 240 },
    { id: 3, name: 'Filos Microblading x10 18U 0.18, 18U 0.25, 16 angulares', price: 2400 },
    { id: 4, name: 'Filos Microblading x50 18U 0.18, 18U 0.25, 16 angulares', price: 11500 },
    { id: 5, name: 'Tebori Doble punta', price: 2900 },
    { id: 6, name: 'Piel Sintetica Chica Medidas 14x19', price: 2300 },
    { id: 7, name: 'Piel Sintetica Cejas No necesita pigmento', price: 3200 },
    { id: 8, name: 'Piel Sintetica Grande A4 Medida A4', price: 4500 },
    { id: 9, name: 'Film Microblading 200 metros', price: 1500 },
    { id: 10, name: 'Guantes Nitrilo Negros Talle S y M', price: 6900 },
    { id: 11, name: 'Guantes Nitrilo Rosas Talle S y M', price: 7200 },
    { id: 12, name: 'Marcador Quirurgico', price: 2000 },
    { id: 13, name: 'Lapiz Dermatografico Negro, blanco, marron', price: 910 },
    { id: 14, name: 'Porta Cups Acrilico Para colocar los cups', price: 2200 },
    { id: 15, name: 'Calibre Pequeño', price: 900 },
    { id: 16, name: 'Microhisopos x100', price: 2900 },
    { id: 17, name: 'Microhisopos de Madera x100', price: 900 },
    { id: 18, name: 'Cups x100', price: 1300 },
    { id: 19, name: 'Anillos x100', price: 2690 },
    { id: 20, name: 'Cepillos de pestañas x50', price: 2900 },
    { id: 21, name: 'Perfiladores x3', price: 1100 },
    { id: 22, name: 'Descartador de agujas 2.2L', price: 2900 },
    { id: 23, name: 'Anestesia TKTX crema 40% Para Piel Cerrada', price: 2450 },
    { id: 24, name: 'Anestesia TKTX crema 55% La mas poderosa del mercado', price: 6900 },
    { id: 25, name: 'Butter 250gr', price: 4900 },
    { id: 26, name: 'Espuma de Limpieza Magic', price: 9800 },
    { id: 27, name: 'Campos de trabajo x100', price: 5900 },
    { id: 28, name: 'Cofias x100', price: 5600 },
    { id: 29, name: 'Cofias x10', price: 700 },
    { id: 30, name: 'Lapicera Gel Blanca - Negra - Roja', price: 2300 },
    { id: 31, name: 'Pigmento Tewennie', price: 6300 },
  { id: 32, name: 'Luanes', price: 23990 },
  { id: 33, name: 'Iron Works', price: 35000 },
  { id: 34, name: 'Permablend', price: 40900 },

  { id: 36, name: 'Organic Colors Cejas y Delineado', price: 29900 },
  { id: 37, name: 'Organic Colors Labios y Scalp', price: 35900 },
  { id: 38, name: 'Anestesia TKTX Crema 55%', price: 6900 },
  { id: 39, name: 'Anestesia TKTX Spray', price: 3500 },
  { id: 40, name: 'Anestesia TAG 45', price: 3900 },
  { id: 43, name: 'Crema post Tattoo Magic x30gr', price: 900 },
  { id: 44, name: 'Crema Tatuajes Para Brillo, Color Humecta Hidrata', price: 6400 },
  { id: 45, name: 'Crema Tatuajes Para Brillo, Color Humecta Hidrata X2 UNIDADES', price: 12000 },
  { id: 46, name: 'Crema Fouguera Microblading', price: 350 },
  { id: 47, name: 'Crema Fouguera Microblading x10', price: 2800 },
  { id: 48, name: 'Crema Fouguera Microblading x50', price: 12250 },
  { id: 49, name: 'Pen Rocket 2', price: 115000 },
  { id: 50, name: 'Pen Soulnova E2', price: 164100 },
  { id: 51, name: 'Pen Black Bird', price: 89000 },
  { id: 52, name: 'Fuente Nacional sin visor', price: 25990 },
  { id: 190, name: 'Fuente Inalmabrica AVA', price: 47900 },
{ id: 191, name: 'Kit Pen Black Bird con Fuente Digital Completo', description: 'Más de 13 Productos', price: 119000 },
{ id: 199, name: 'Kit Pen Black Bird con Fuente inalámbrica', price: 112000 },
{ id: 600, name: 'Stencil Garage 1oz', price: 1400 },
  { id: 53, name: 'Fuente Nacional con Visor', price: 27690 },
  { id: 696, name: 'Crema Post Tattoo Condor 22 Vegana', price: 4500 },
  { id: 54, name: 'Fuente Inalambrica BRONC', price: 72100 },
  { id: 55, name: 'Fuente Inalmabrica Supremme', price: 42300 },
  { id: 56, name: 'Kit Micropigmentacion Tattoo Rocket 2 Fuente Digital', price: 120000 },
  { id: 57, name: 'Cartuchos para pen de tattoo xblister 5 unidades AVA', variants: ['0801', '1001', '1201', '0803', '1003', '1203', '1005', '1205', '1207', '1209', '1211', '1214'], price: 7000 },
  { id: 58, name: 'Cartuchos para pen de tattoo Caja x10 AVA', variants: ['0801', '1001', '1201', '0803', '1003', '1203', '1005', '1205', '1207', '1209', '1211', '1214'], price: 12900 },
  { id: 59, name: 'PROMO SPARK CARTUCHOS X20 UNIDADES 1201, 1203, 1205', variants: ['1201', '1203', '1205'], price: 15990 },
  { id: 60, name: 'PROMO SPARK CARTUCHOS X20 UNIDADES 1207, 1209, 1211, 1214', variants: ['1207', '1209', '1211', '1214'], price: 17990 },
  { id: 61, name: 'PROMO SPARK CARTUCHOS X10 UNIDADES 1201, 1203, 1205, 1207, 1209, 1211, 1214', variants: ['1201', '1203', '1205', '1207', '1209', '1211', '1214'], price: 8900 },
  { id: 63, name: 'Cartuchos para pen de tattoo BRONC X10', variants: ['0801', '1001', '1003', '1005'], price: 13500 },
  { id: 64, name: 'Cartuchos para pen de tattoo BRONC Blister', variants: ['0801', '1001', '1003', '1005'], price: 7000 },
  { id: 65, name: 'Cartuchos COCO x10', variants: ['0601', '0801', '1001', '0803', '1003'], price: 11900 },
  { id: 66, name: 'Cartuchos COCO x5', variants: ['0601', '0801'], price: 6500 },
  { id: 67, name: 'Cartuchos Dermografo Medidas 1R y 3R', variants: [], price: 875 },
  { id: 68, name: 'Cartuchos Dermografo Medidas 5R', variants: [], price: 875 },
  
  { id: 72, name: 'Guantes Nitrilo Negros Talle S y M', price: 6900 },
  { id: 73, name: 'Guantes Nitrilo Rosas Talle S y M', price: 7200 },

  { id: 75, name: 'Espuma de Limpieza Magic', price: 5100 },
  { id: 76, name: 'Campos de trabajo x100 Para colocar en tu mesa de trabajo', price: 5900 },
  
 
  { id: 79, name: 'Cubre pen x100 Para Proteger al pen de la contaminación cruzada', price: 2800 },
  { id: 80, name: 'Cubre Pen Rosas x100 Para Proteger al pen de la contaminación cruzada', price: 2800 },
  { id: 81, name: 'Cubre cables x100 Para Proteger al pen y los cables de la contaminación cruzada', price: 2300 },
  { id: 82, name: 'Clorexhidina 300cc Para Armar solución jabonosa', price: 3500 },
  { id: 83, name: 'Dosificador spray 500cc', price: 1200 },
  { id: 84, name: 'Cinta Flex 7.5cm', price: 2100 },
  { id: 85, name: 'Cinta flex 5cm', price: 1900 },
  { id: 86, name: 'Masajeador Rodillo Doble Jade Piedra Guasha Natural Facial', price: 2600 },
  { id: 87, name: 'Barbijos Descartables x50 Rosa Rosas', price: 1800 },
  { id: 88, name: 'Ventilador USB Pestañas', price: 5900 },
  { id: 89, name: 'Molde para Cejas, Labios, Ojos', price: 1300 },
  
  { id: 90, name: 'Mezclador de Pigmentos', price: 6900 },
  { id: 91, name: 'Cubre Camilla Lycra Elastizado', price: 25000 },
  { id: 92, name: 'KIT TATTOO COMPLETO KABUKI', description: 'KIT TATUAJES KABUKI ... QR VIDEO DE COMO ARMAR LA MAQUINA CORRECTAMENTE - 3 GROMMETS', price: 42000 },
  { id: 93, name: 'Kit Tattoo Hand Poked', description: 'Incluye 13 productos! Consultanos', price: 15990 },
  
  { id: 96, name: 'Maquina Rotativa Kabuki', price: 11900 },
  { id: 97, name: 'Clorexhidina 300ml', description: 'Para Armar solucion jabonosa', price: 3900 },
  { id: 98, name: 'Dosificador spray 500cc', price: 1100 },
  { id: 99, name: 'Piel Sintetica Chica', description: 'Medidas 14x19', price: 2900 },
  { id: 100, name: 'Piel Sintetica Grande A4', description: 'Medida A4', price: 4500 },
  { id: 101, name: 'Cinta Flex 7.5cm', price: 2100 },
  { id: 102, name: 'Vaselina Kilo', price: 11800 },
  { id: 102, name: 'Vaselina Medio Kilo', price: 6300 },
  { id: 103, name: 'Papel Hectografico x unidad', price: 590 },
  { id: 104, name: 'Papel Hectografico x5 uniudades', price: 3500 },
  { id: 105, name: 'Papel Hectografico x10', price: 5900 },
  { id: 106, name: 'Papel Hectografico x100', price: 41000 },
  { id: 107, name: 'Piel Sintetica A4', description: 'Tamaño 21x27', price: 4500 },
  { id: 108, name: 'Piel Sintetica Comun', description: 'Tamaño 14x19', price: 3000 },
  { id: 109, name: 'Agujas Varilla x5 unidades', description: '1203, 1205, 1211, 1214', price: 2000 },
  { id: 110, name: 'Agujas Varilla x10 Unidades', description: '1203, 1205, 1211, 1214', price: 3900 },
  { id: 111, name: 'Agujas Varilla Caja x25', description: '1203, 1205, 1211, 1214', price: 7500 },
  { id: 112, name: 'Punteras x unidad', price: 300 },
  { id: 113, name: 'Punteras x 5 unidades', price: 1890 },
  { id: 114, name: 'Punteras x10 Unidades', price: 3500 },
  { id: 115, name: 'Tinta Tattoo Standar 1oz', price: 900 },
  { id: 116, name: 'Tinta Tattoo Smoke 2oz', price: 1300 },
  { id: 117, name: 'Bajalenguas x100', price: 1800 },
  { id: 118, name: 'Grommets Nipples x50', price: 400 },
  { id: 119, name: 'Grommets Nipples x100', price: 950 },
  { id: 120, name: 'Cable RCA', description: 'Para maquinas rotativas', price: 4900 },
  { id: 121, name: 'limpiador Pestañas curvo', price: 800 },
  { id: 122, name: 'Apoya Brazo Tattoo Regulable', price: 20900 },
  { id: 123, name: 'Tinta Negra Vegetal 1oz', price: 2100 },
  { id: 124, name: 'Tinta Dynamic USA 1oz', price: 5400 },
  ]);

  

  const formatOptionLabel = ({ label, value }) => (
    <div>
      <span>{label}</span>
      <span style={{ marginLeft: '10px', color: 'red' }}>${value.price}</span>
    </div>
  );

  
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = () => {
    if (selectedOption) {
      setSelectedProducts([...selectedProducts, { ...selectedOption.value, quantity: 1 }]);
      setSelectedOption(null);
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.splice(index, 1);
    setSelectedProducts(updatedProducts);
  };

  const handleQuantityChange = (index, newQuantity, action) => {
    const updatedProducts = [...selectedProducts];

    if (action === 'increment' || action === 'decrement') {
      const currentQuantity = updatedProducts[index].quantity || 0;
      updatedProducts[index].quantity = action === 'increment' ? currentQuantity + 1 : Math.max(currentQuantity - 1, 0);
    } else if (newQuantity === '' || (Number.isInteger(parseInt(newQuantity, 10)) && parseInt(newQuantity, 10) >= 1)) {
      updatedProducts[index].quantity = newQuantity === '' ? '' : parseInt(newQuantity, 10);
    }

    setSelectedProducts(updatedProducts);
  };

  const handleInputChange = (inputValue, actionMeta) => {
    if (actionMeta.action === 'input-change' && inputValue === '' && actionMeta.action === 'menu-close') {
      handleProductSelect();
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-AR');
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  const calculateTotalWithPaymentMethod = (percentage) => {
    const total = calculateTotal();
    return total + (total * (percentage / 100));
  };

  return (
    <div>



      
      <h1 className='banner'>INSUMOS BY ESTUDIO DATRI</h1>
      <label>Nombre del Cliente:</label>
      <input
        type="text"
        placeholder="Nombre del Cliente"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="client-name-input" // Agregamos la clase
      />

      <h1>Buscar Producto</h1>

      
      <Select
  options={products.map((product) => ({ label: product.name, value: product }))}
  value={selectedOption}
  onChange={(option) => setSelectedOption(option)}
  onInputChange={handleInputChange}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleProductSelect();
    }
  }}
  formatOptionLabel={formatOptionLabel} // Agregamos esta línea
/>









      <button onClick={handleProductSelect}>Agregar</button>

      <h2>Productos Seleccionados</h2>
      <ul>
        {selectedProducts.map((product, index) => (
          <li key={index}>
            {product.name} - ${formatPrice(product.price)} x
            <button onClick={() => handleQuantityChange(index, '', 'decrement')}>-</button>
            <input
              type="text"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(index, e.target.value, 'input')}
            />
            <button onClick={() => handleQuantityChange(index, '', 'increment')}>+</button>
            <button onClick={() => handleRemoveProduct(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h2>Total Efectivo: ${formatPrice(calculateTotal())}</h2>
      <h2>Total Transferencia: ${formatPrice(calculateTotalWithPaymentMethod(10))}</h2>
      <h2>Total con Tarjeta (1 pago): ${formatPrice(calculateTotalWithPaymentMethod(17))}</h2>
      <h2>Total con Tarjeta (3 cuotas): ${formatPrice(calculateTotalWithPaymentMethod(31))} (3 cuotas de ${formatPrice((calculateTotalWithPaymentMethod(31) / 3).toFixed(2))})</h2>
    </div>
  );
};

export default ProductList;