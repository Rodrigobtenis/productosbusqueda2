import React, { useState } from 'react';
import Select from 'react-select';
import "./ProductosBusqueda.css";




const ProductList = () => {
  const [clientName, setClientName] = useState('');
  const [products] = useState([
    { id: 1, name: 'Filos Microblading x unidad ', price: 360 },

    { id: 3, name: 'Filos Microblading x10 ', price: 3300 },
    { id: 4, name: 'Filos Microblading x50 ', price: 15000 },
    { id: 99887004, name: 'Filos Microblading x100 ', price: 28500 },
    { id: 5, name: 'Tebori Doble punta', price: 3900 },
    { id: 5101232323, name: 'Tebori Comun', price: 1900 },
    { id: 51065464564577001232323, name: 'Tebori Diamante', price: 4900 },
    { id: 6, name: 'Piel Sintetica Chica Medidas 14x19', price: 3140 },
    { id: 7, name: 'Piel Sintetica Cejas No necesita pigmento', price: 3000 },
    { id: 70098767, name: 'Dermapen Dr pen M7', price: 89900 },
    { id: 9909907, name: 'Cartuchos Dermapen x unidad', price: 1300 },
    { id: 9909907, name: 'Cartuchos Dermapen x10', price: 12000 },

    { id: 9, name: 'Film Microblading 200 metros', price: 2800 },
    { id: 89, name: 'Film Grande 300 metros x38cm', price: 7890 },
    { id: 10, name: 'Guantes Nitrilo Negros Talle S y M', price: 6900 },
    { id: 11, name: 'Guantes Nitrilo Rosas Talle S y M', price: 7200 },
    { id: 12, name: 'Marcador Quirurgico', price: 2000 },
    { id: 13, name: 'Lapiz Dermatografico Negro, blanco, marron', price: 1400 },
    { id: 14, name: 'Porta Cups Acrilico Para colocar los cups', price: 4900 },
    { id: 15, name: 'Calibre Pequeño', price: 1300 },
    { id: 15, name: 'Calibre Grande', price: 2110 },
    { id: 16, name: 'Microhisopos Plastico x50', price: 3800 },
    { id: 17, name: 'Microhisopos de Madera x100', price: 1300 },
    { id: 18, name: 'Cups x100', price: 1800 },
    { id: 19, name: 'Anillos x100', price: 2490 },
    { id: 20, name: 'Cepillos de pestañas x50', price: 3400 },
    { id: 21, name: 'Perfiladores x3', price: 1100 },
    { id: 22, name: 'Descartador de agujas 1.4L', price: 3190 },

    { id: 23, name: 'Tinta Dynamic negra 1oz', price: 10500 },
    { id: 23, name: 'Pen Bronc Magic', price: 287920 },
    { id: 23, name: 'Pen Bronc v12 Stroke regulable', price: 340000 },
    { id: 23, name: 'Campos Descartables rosas x50', price: 4200 },
    { id: 23, name: 'Campos Descartables negros x50', price: 5200 },
    { id: 25, name: 'Butter 250gr', price: 4900 },
    { id: 26, name: 'Espuma de Limpieza Magic', price: 5100 },
    { id: 27, name: 'Campos de trabajo x100', price: 5900 },
    { id: 27, name: 'Taburete Metal', price: 87900 },
    { id: 29898346527, name: 'Barbijo Transparente por unidad', price: 1500 },
    { id: 28, name: 'Cofias x100', price: 5600 },
    { id: 29, name: 'Cofias x10', price: 750 },
    { id: 51, name: 'Pen Ink Flow', price: 170000 },
    { id: 51, name: 'Kit PMU Pen CLassic + Fuente AVA + Insumos', price: 169900 },
    { id: 51, name: 'Kit PMU Venus + Insumos', price: 278870 },
    { id: 51, name: 'Pen Biomaser K6003 Wireless PMU', price: 198000 },
    { id: 51, name: 'Pen Biomaser U1 Wireless PMU Stroke Regulable', price: 265000 },
    { id: 51, name: 'Pen Biomaser TP010 PMU', price: 198000 },
    { id: 30, name: 'Lapicera Gel Blanca - Negra - Roja', price: 2700 },
    { id: 31, name: 'Pigmento Tewennie', price: 6300 },
    { id: 32, name: 'Luanes', price: 23990 },
    { id: 33, name: 'Iron Works', price: 35000 },
    { id: 39900113, name: 'Alice', price: 43900 },
    { id: 34, name: 'Permablend Clasicos', price: 48200 },
    { id: 34, name: 'Permablend Tina Daevis', price: 51100 },
    { id: 34, name: 'Dermografo Inalambrico', price: 46900 },
    
    { id: 37, name: 'Organic Colors ', price: 36500 },
    { id: 38, name: 'Anestesia TKTX NUMB', price: 8500 },
    { id: 399883198, name: 'Anestesia TKTX 99.9%', price: 4900 },
    { id: 39, name: 'Anestesia TKTX Spray', price: 4900 },
    { id: 789539, name: 'Crema Tattoo Care 250ml', price: 8500 },
    { id: 365319, name: 'Jabon Tattoo Care 250ml', price: 8500 },
    { id: 40, name: 'Anestesia TAG 45', price: 3900 },
    { id: 43, name: 'Crema post Tattoo Magic x30gr', price: 900 },
    { id: 44, name: 'Crema Tatuajes Para Brillo, Color Humecta Hidrata', price: 5500 },
    { id: 45, name: 'Crema Tatuajes Para Brillo, Color Humecta Hidrata X2 UNIDADES', price: 12000 },

    { id: 46, name: 'Crema Fouguera Microblading', price: 350 },
    { id: 46565698, name: 'Anestesia Forte Plus 30gr', price: 14900 },

    { id: 47, name: 'Crema Fouguera Microblading x10', price: 2800 },
    { id: 48, name: 'Crema Fouguera Microblading x50', price: 13350 },
    { id: 39, name: 'Cartuchos Space Dragon x20', price: 18900 },
    { id: 39, name: 'Cartuchos Space Dragon x5', price: 6000 },
    { id: 49, name: 'Pen Rocket 2', price: 91000 },
    { id: 50, name: 'Pen Soulnova E2', price: 240000 },
    { id: 399800001, name: 'Pen Tattoo VENUS ', price: 248900 },
    { id: 51, name: 'Pen Carbon', price: 69900 },
    { id: 56547651, name: 'Pen Classic Tattoo', price: 69900 },
    { id: 5998881, name: 'Battery Pen Y15', price: 200000 },
    { id: 52, name: 'Fuente Nacional sin visor', price: 54000 },
    { id: 190, name: 'Fuente Inalmabrica AVA', price: 79900 },
    { id: 198987400580, name: 'Pen Inalmabrica PMU', price: 170900 },
    { id: 1999878987400580, name: 'Pen Inalmabrica Y12', price: 139900 },
    { id: 199983478987400580, name: 'Pen Inalmabrica Estuche', price: 139900 },
    { id: 19998347668987400580, name: 'Compas Aureo', price: 11493 },

    { id: 191, name: 'Kit Pen Black Bird con Fuente Digital Completo', description: 'Más de 13 Productos', price: 119000 },
    { id: 98898989, name: 'Caja Sobres Tattoo Care x50 sobres dobles', price: 38900 },
    { id: 132320089, name: 'Sobres Tattoo Care x10 unidades dobles  ', price: 9000 },

    { id: 191999, name: 'Pen de Tattoo Estandar', price: 64000 },
    { id: 199, name: 'Kit Pen Black Bird con Fuente inalámbrica', price: 112000 },
    { id: 51, name: 'Pen Big Wasp Z1', price: 294000 },
    { id: 600, name: 'Stencil Smoke', price: 5900 },
    { id: 665600, name: 'Tinta 5 Jinetes', price: 4900 },
    { id: 53, name: 'Fuente Nacional con Visor', price: 27690 },
    { id: 696, name: 'Crema Post Tattoo Condor 22 Vegana', price: 5500 },
    { id: 697897897893696, name: 'Espumero', price: 2115 },
    { id: 69789783327893696, name: 'Caja Navajas x100', price: 12000 },
    { id: 697897110897893696, name: 'Caja Navajas x10', price: 1500 },

    { id: 54, name: 'Fuente Inalambrica BRONC', price: 72100 },
    { id: 55, name: 'Fuente Inalmabrica Supremme', price: 42300 },
   
    { id: 57, name: 'Cartuchos para pen de tattoo xblister 5 unidades AVA', variants: ['0801', '1001', '1201', '0803', '1003', '1203', '1005', '1205', '1207', '1209', '1211', '1214'], price: 8500 },
    { id: 58, name: 'Cartuchos para pen de tattoo Caja x10 AVA', variants: ['0801', '1001', '1201', '0803', '1003', '1203', '1005', '1205', '1207', '1209', '1211', '1214'], price: 15000 },
    { id: 59, name: 'PROMO SPARK CARTUCHOS X20 UNIDADES', variants: ['1201', '1203', '1205'], price: 17900 },
    
    { id: 61, name: 'PROMO SPARK CARTUCHOS X10 UNIDADES ', variants: ['1201', '1203', '1205', '1207', '1209', '1211', '1214'], price: 9500 },
    { id: 61, name: 'PROMO SPARK CARTUCHOS X5 UNIDADES ', variants: ['1201', '1203', '1205', '1207', '1209', '1211', '1214'], price: 4100 },
    
    { id: 65, name: 'Cartuchos COCO x10', variants: ['0601', '0801', '1001', '0803', '1003'], price: 13500 },

    { id: 66, name: 'Cartuchos COCO x5', variants: ['0601', '0801'], price: 8100 },
    { id: 6627996, name: 'Cartuchos Space Dragon x10', variants: ['0601', '0801'], price: 10000 },
    { id: 67, name: 'Cartuchos Dermografo x unidad', variants: [], price: 1050 },
    { id: 68, name: 'Cartuchos Dermografo x10', variants: [], price: 9000 },

    { id: 72, name: 'Guantes Nitrilo Negros Talle S y M', price: 6900 },
    { id: 73, name: 'Guantes Nitrilo Rosas Talle S y M', price: 7200 },

    { id: 75, name: 'Espuma de Limpieza Magic', price: 5100 },
    { id: 75, name: 'Agujas de Varilla Bronc x5 unidades', price: 2500 },
    { id: 75, name: 'Agujas de Varilla Bronc x10 unidades', price: 3510 },
    { id: 75, name: 'Agujas de Varilla Bronc x20 unidades', price: 6100 },
    { id: 75, name: 'Agujas de Varilla Bronc x50 unidades', price: 14120 },



    { id: 79, name: 'Cubre pen x100 Para Proteger al pen de la contaminación cruzada', price: 3700 },
    { id: 80, name: 'Cubre Pen Rosas x100 Para Proteger al pen de la contaminación cruzada', price: 3700 },
    { id: 81, name: 'Cubre cables x100 Para Proteger al pen y los cables de la contaminación cruzada', price: 2300 },
    { id: 82, name: 'Clorexhidina 300cc Para Armar solución jabonosa', price: 3900 },
    { id: 82, name: 'Clorexhidina 300cc + Espumero', price: 5900 },
    { id: 83, name: 'Dosificador spray 500cc', price: 2200 },

    { id: 85, name: 'Cinta flex 5cm', price: 2100 },

    { id: 87, name: 'Barbijos Descartables x50 Rosa Rosas o Negros', price: 2500 },
    { id: 87, name: 'Barbijos Negros N95 x10', price: 1100 },
    { id: 88, name: 'Ventilador USB Pestañas', price: 5900 },
    { id: 89, name: 'Molde para Cejas, Labios, Ojos', price: 1700 },
    { id: 89529, name: 'Porta Hisopo Acrilico', price: 4500 },
    { id: 85435435349, name: 'Porta Algodon Acrilico', price: 4500 },
    { id: 90, name: 'Mezclador de Pigmentos', price: 6900 },
    { id: 91, name: 'Cubre Camilla Lycra Elastizado', price: 25000 },
    { id: 89999889, name: 'Mascara para labios x10', price: 3519 },
    { id: 89, name: 'Parche TKTX Labios x unidad', price: 500 },
    { id: 92, name: 'KIT TATTOO COMPLETO KABUKI', description: 'KIT TATUAJES KABUKI ... QR VIDEO DE COMO ARMAR LA MAQUINA CORRECTAMENTE - 3 GROMMETS', price: 42000 },
    { id: 93, name: 'Kit Tattoo Hand Poked', description: 'Incluye 13 productos! Consultanos', price: 17890 },

    { id: 96, name: 'Maquina Rotativa Kabuki', price: 11900 },
    { id: 97, name: 'Clorexhidina 300ml', description: 'Para Armar solucion jabonosa', price: 3900 },
    { id: 98, name: 'Dosificador spray 250cc', price: 1800 },



    { id: 102, name: 'Vaselina Kilo', price: 10890 },
    { id: 102, name: 'Vaselina Medio Kilo', price: 7000 },
   
    { id: 105, name: 'Papel Hectografico x10', price: 5900 },
    { id: 106, name: 'Papel Hectografico x100', price: 47900 },


    { id: 109, name: 'Agujas Varilla x5 unidades', description: '1203, 1205, 1211, 1214', price: 2000 },
    { id: 110, name: 'Agujas Varilla x10 Unidades', description: '1203, 1205, 1211, 1214', price: 3900 },
    { id: 111, name: 'Agujas Varilla Caja x25', description: '1203, 1205, 1211, 1214', price: 7500 },
    { id: 112, name: 'Punteras x unidad', price: 300 },
    { id: 113, name: 'Punteras x 5 unidades', price: 1890 },
    { id: 114, name: 'Punteras x10 Unidades', price: 3500 },
    { id: 115, name: 'Tinta Tattoo Standar 1oz', price: 900 },
    { id: 116, name: 'Tinta Tattoo Smoke 2oz', price: 1300 },
    { id: 117, name: 'Bajalenguas x100', price: 2500 },
    { id: 118, name: 'Grommets Nipples x50', price: 400 },
    { id: 119, name: 'Grommets Nipples x100', price: 950 },
    { id: 120, name: 'Cable RCA', description: 'Para maquinas rotativas', price: 7100 },
    { id: 121, name: 'limpiador Pestañas curvo', price: 800 },
    { id: 122, name: 'Apoya Brazo Tattoo Regulable', price: 28900 },
    { id: 122, name: 'Apoya Brazo Tattoo Regulable Plastificado', price: 35900 },
    { id: 123, name: 'Tinta Negra Vegetal 1oz', price: 2100 },
    { id: 124, name: 'Tinta Dynamic USA 1oz', price: 10500 },
    { id: 950057, name: "Pinza Recta Escamas Rose Gold P-29 9500-57", price: 9890 },
    { id: 950134, name: "Pinza Lp-6 9501-34", price: 6200 },
    { id: 950132, name: "Pinza Lp-4 9501-32", price: 6200 },
    { id: 950129, name: "Pinza Lp-1 9501-29", price: 6200 },
    { id: 950060, name: "Pinza Volumen Escamas Plata P-32 9500-60", price: 9890 },
    { id: 950053, name: "Pinza Volumen Fina Escamas Plata P-25 9500-53", price: 9890 },
    { id: 950079, name: "Pinza Gold Lv-47 9500-79", price: 9890 },
    { id: 950051, name: "Pinza Recta Gold P 9500-51", price: 9890 },
    { id: 950044, name: "Pinza Volumen Dorada P-15 9500-44", price: 9890 },
    { id: 89, name: 'Kit de Microblading Completo con Pigmento', price: 23391 },
    { id: 950047, name: "Pinza Volumen Dorada P-19 9500-47", price: 9890 },
    { id: 950088, name: "Tijera Precisión P-38 9500-88", price: 9890 },
    { id: 950090, name: "Pinza Corona Ultrafina P-54 9500-90", price: 9890 },
    { id: 950018, name: "Pinza Para Pestañas Rosa - Punta Curva 9500-18", price: 2476 },
    { id: 950019, name: "Pinza Para Pestañas Rosa Punta Recta 9500-19", price: 2476 },
    { id: 950014, name: "Pinza Para Pestañas Vetus Punta Curva 9500-14", price: 1790 },
    { id: 950015, name: "Pinza Para Pestañas Vetus Punta Recta 9500-15", price: 1790 },
    { id: 1500, name: "Hilo Marcador Negro o Blanco", price: 3100 },
    { id: 99802, name: "Adhesivo negro mega bonding + 2g", price: 16490 },
    { id: 99980, name: "Adhesivo negro mega bonding + 3g", price: 19990 },
    { id: 99805, name: "Adhesivo negro mega bonding + 5g", price: 24990 },
    { id: 4502, name: "Adhesivo negro master 2g", price: 16490 },
    { id: 4503, name: "Adhesivo negro master 3g", price: 19990 },
    { id: 4505, name: "Adhesivo negro master 5g", price: 24990 },
    { id: 4102, name: "Adhesivo negro elite 2g", price: 16490 },
    { id: 43426789102, name: "Espumero 150ml", price: 2115 },
    { id: 4329815102, name: "Cabeza de Silicona Pestañas", price: 10152 },
    { id: 4329812255102, name: "Pen Tattoo con Caja Rigida con Conector RCA Inalambrica  ", price: 135000 },

    { id: 4102, name: "Fuente Aurora 2", price: 72300 },
    { id: 4103, name: "Adhesivo negro elite 3g", price: 19990 },
    { id: 4102, name: "Parches de Colageno x50", price: 7470 },
    { id: 4105, name: "Adhesivo negro elite 5g", price: 24990 },
    { id: 4110, name: "Adhesivo negro elite 10g", price: 36490 },
    { id: 6002, name: "adhesivo negro elite + 2g", price: 16490 },
    { id: 6003, name: "Adhesivo negro elite + 3g", price: 19990 },
    { id: 6005, name: "Adhesivo negro elite + 5g", price: 24990 },
    { id: 6010, name: "Adhesivo negro elite + 10g", price: 36490 },
    { id: 5515, name: "pre adhesivo absolute glue aroma menta - secado super rapido 15ml", price: 25390 },
    { id: 65648561, name: "PRIMER CON PINCEL 5g", price: 10450 },
    { id: 656486651, name: "PRIMER EN SPRAY AROMA FLORES 40ml", price: 14850 },
    { id: 656485661, name: "PRIMER EN SPRAY NEUTRO 40ml ", price: 14850 },
    { id: 564666851, name: "Removedor EN CREMA GRIS de 5g", price: 9890 },
    { id: 656664851, name: "Removedor EN CREMA AROMA FRUTILLA 15g", price: 16350 },
    { id: 656485, name: "Removedor EN GEL NEUTRO 20g", price: 13190 },
    { id: 98985, name: "Fixing Gel 8g", price: 12290 },
    { id: 982322548, name: "Polvo-Brona Henna Color negro 4g", price: 10890 },
    { id: 656654654463851, name: "Polvo-Brona Henna  Color Marron Oscuro 4g", price: 10890 },
    { id: 65326463851, name: "Polvo-Brona Color Henna Marron Claro 4g", price: 10890 },
    { id: 656789463851, name: "PULUK TOXOX LASH VOLUME", price: 13390 },
    { id: 6564463851, name: "PULUK TOXOX LASH VITAL", price: 13390 },
    { id: 65323363851, name: "Pestañas Tecnologicas MIX todas las medidas", price: 9690 },
    { id: 653239741363851, name: "Pestañas Tecnologicas YY Curva C o D", price: 8990 },
    { id: 6532397641363851, name: "Pestañas Tecnologicas 3D Cuva C o D", price: 10990 },
    { id: 65323974176363851, name: "Pestañas Tecnologicas 4D", price: 15990 },
    { id: 65323974195995363851, name: "Pestañas Tecnologicas 5D", price: 19990 },
    { id: 653239741363851, name: "Pestañas Tradicionales MIX y Todas las curvas, todas las medidas", price: 6790 },
    { id: 65323974144363851, name: "Kit Amino Lifting", price: 38490 }





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
      <h2>Total con Tarjeta (3 cuotas): ${formatPrice(calculateTotalWithPaymentMethod(29))} (3 cuotas de ${formatPrice((calculateTotalWithPaymentMethod(29) / 3).toFixed(2))})</h2>
      <h2>Total con Tarjeta (6 cuotas): ${formatPrice(calculateTotalWithPaymentMethod(40))} (6 cuotas de ${formatPrice((calculateTotalWithPaymentMethod(42) / 6).toFixed(2))})</h2>
    </div>
  );
};

export default ProductList;