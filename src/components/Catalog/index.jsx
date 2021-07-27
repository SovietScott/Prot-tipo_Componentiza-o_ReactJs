import React from 'react';
import CatalogItem from '../CatalogItem';
import {Mural} from './styles.js';

const Catalog = () => {
  return(
    <Mural>
      <CatalogItem itemName={'Blush Payot'} 
      itemDescription={`Blush em pó compacto. Payot Blush confere um rubor natural no rosto para que ele fique com ar saudável e elegante. Vem em diversas cores para combinar com os mais vários tons de pele`} 
      imageUrl={'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/69514/c2c98a0c-a38a-4f7d-824d-6c69b94ed12d-payot-extase-blush-em-po-5g.png'}
      itemPrice={'30,99'}
      />
      <CatalogItem itemName={`Absolut Repair Cortex Lipidium Mascara - L'Oreal`}
      itemDescription={`Máscara da L'Oreal. É uma ótima opção para tratas as madeixas. Ela nutre e reconstrói profundamente cabelos quimicamente tratados e ainda dá brilho aos fios.`}
      imageUrl={'https://img.vixdata.io/pd/webp-large/pt/sites/default/files/c/creme-cabelo-loreal-07-19-1400-800.jpg'}
      itemPrice={'149,99'}
      />
      <CatalogItem itemName={`Revival Gorgeous Oil Braé`}
      itemDescription={`Revival Oil possui ação repositora lipídica, elaborado com óleos de coco, abacate e macadâmia hidrata, nutre, sela e fortalece as pontas ressecadas, promovendo brilho intenso, maciez e vitalidade aos fios. O uso regular do produto previne a formação de pontas duplas.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/336380/0160.jpg?v=636934594859930000'}
      itemPrice={'96,80'}
      />
      <CatalogItem itemName={`Batom Matte M.A.C Lipstick Botanic Panic - Tulip Service`}
      itemDescription={`O Batom M·A·C Lipstick – o produto icônico que tornou a M·A·C famosa, traz a versão: fórmula de longa duração que proporciona cor intensamente pigmentada e acabamento ultra matte aveludado.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/440189/batom-matte-m-a-c-lipstick-botanic-panic-tulip-service.jpg?v=637605789675670000'}
      itemPrice={'109,00'}
      />
      <CatalogItem itemName={`Protetor Solar Facial Vichy - Idéal Soleil Toque Seco FPS 50 - 40g`}
      itemDescription={`O protetor solar facial da Vichy protege contra os raios UVA e UVB, sem deixar brilho residual e com controle da oleosidade por até 8 horas. Satisfação e eficácia garantida por especialistas em textura e pacientes brasileiras com pele mista a oleosa. O Idéal Soleil Toque Seco é resistente à água.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/281352/12.jpg?v=636743473824170000'}
      itemPrice={'60,75'}
      />
      <CatalogItem itemName={`Wanted by Night Azzaro Perfume Masculino - Eau de Parfum`}
      itemDescription={`Festa durante a noite. Nas suas rondas hipnóticas durante a noite este homem cultiva uma vertente inatingível. Enigmático, nunca se encontra onde é esperado. Tanto pode surgir ao volante do seu Alfa Romeo Alfetta GTV 1976, como num skate e depois desaparecer quando as criaturas mais hype chegam, voltando a aparecer em outro lugar, em outro quarteirão ou até em outra cidade. Por que não? Em Milão, Londres, Paris, Nova Iorque, ele não falta a uma festa, a um jantar.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/269401/9831.jpg?v=636670927937230000'}
      itemPrice={'230,85'}
      />
      <CatalogItem itemName={`Joico K-Pak To Repair Damage Shampoo Reconstrutivo`}
      itemDescription={`Reconstrói e melhora a estrutura do cabelo. Contém Complexo Quadramine, uma mistura exclusiva de proteínas com baixo peso molecular. Esta fórmula equilibrada de 19 aminoácidos essenciais (os componentes básicos do cabelo) se adere de forma rápida e eficaz para garantir a máxima proteção e reconstrução do cabelo desde a cutícula até as pontas. Não altera a cor.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/441177/Joico-K-Pak-To-Repair-Damage-Shampoo-Reconstrutivo.jpg?v=637610500470270000'}
      itemPrice={'274,95'}
      />
      <CatalogItem itemName={`Lancôme La Nuit Tresor Kit – Perfume Feminino EDP + Loção Corporal`}
      itemDescription={`Uma noite sensual, quando os amantes se entrelaçam no amor absoluto. O primeiro afrodisíaco gourmand criado para Lancôme por duas estrelas da perfumaria francesa como a nova visão do amor no século 21.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/437441/lancome-la-nuit-tresor-kit-perfume-feminino-edp-locao-corporal--3-.jpg?v=637594036328000000'}
      itemPrice={'369,26'}
      />
      <CatalogItem itemName={`Angel Muse Mugler - Perfume Feminino - Eau de Parfum`}
      itemDescription={`Angel Muse é um novo corpo celeste no cosmos Mugler. A fragrância inspirada na combinação do creme de avelã explosivo e altamente atraente com vetiver, uma das notas lenhosas mais finais e elegantes`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/222144/3439600008821-1.jpg?v=636270977864470000'}
      itemPrice={'227,05'}
      />
      <CatalogItem itemName={`Iluminador Facial M.A.C. Botanic Panic Extra Dimension Skinfinish`}
      itemDescription={`Extra Dimension Skinfinish proporciona iluminação perfeita à pele. O iluminador em pó com acabamento líquido e com reflexos brilhantes, foi desenvolvido para esculpir e realçar pontos altos do rosto, resultando em um efeito luminoso e bem definido.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/440219/iluminador-facial-m-a-c-botanic-panic-extra-dimension-skinfinish.jpg?v=637605815045100000'}
      itemPrice={'209,00'}
      />
      <CatalogItem itemName={`American Crew Firm Hold Gel`}
      itemDescription={`Gel de fixação forte sem álcool. Firm Hold Gel proporciona corpo e brilho extra sem deixar resíduos. Com pH baixo evita o ressecamento dos cabelos e do couro cabeludo. O gel de alta fixação com fórmula sem álcool não deixa resíduos. O pH baixo mantém a hidratação dos cabelos e do couro cabeludo`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/348413/american-crew-firm-hold-gel.jpg?v=637002874724330000'}
      itemPrice={'92,03'}
      />
      <CatalogItem itemName={`Divine Issime Ulric de Varens Feminino`}
      itemDescription={`Divine Issime é uma nova fragrância de Ulric de Varens. Um perfume extasiante, uma fragrância sensual entre a luz e a sombra.
      Suas notas quentes de baunilha, patchouli e fava tonka se unem ao cativante perfume.
      Ulric de Varens Pour Elle Divine-Issime é perfeito para uma mulher romântica, sofisticada e que é segura de si. Suas notas fortes, doces e frescas compõem o acessório perfeito para eventos noturnos e de muita sofisticação.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/175947/divine-issime-coffret-ulric-de-varens.jpg?v=635314332333330000'}
      itemPrice={'93,10'}
      />
      <CatalogItem itemName={`Dolce & Sense Choco/Menthe Paris Elysees Perfume Feminino`}
      itemDescription={`Dolce e Sense Choco/Menthe é uma fragrância, doce e vibrante. Para transmitir a vivacidade e liberdade da mulher ativa, cheia de vida. Que gosta de experimentar coisas novas e não se compara a ninguém. Um perfume para todas as ocasiões.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/323847/dolce-sense-choco-mente-paris-elysees-perfume-feminino-eau--de-parfum1.jpg?v=636857658859000000'}
      itemPrice={'47,61'}
      />
      <CatalogItem itemName={`Délice de Poudre Peaux Mates Bourjois - Pó Compacto Bronzeador `}
      itemDescription={`Blush Délice de Poudre Peaux Mates é uma das makes mais conhecidas da Bourjois! Com embalagem tentadora imitando chocolate, esse blush bronzeador possui textura fina e ultra macia que proporciona um resultado natural, uniforme e saudável.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/357967/55.jpg?v=637057040945070000'}
      itemPrice={'116,10'}
      />
      <CatalogItem itemName={`Black Opium Glow Yves Saint Laurent Perfume Feminino - Eau de Toilette`}
      itemDescription={`Cria uma experiência repleta de um novo efervescente vício de um café sensual e eletrificado por um frescor deslumbrante. O brilho energizante da pêra é realçado por notas cítricas ácidas que iluminam o novo Black Opium Glow Eau de Toilette.`}
      imageUrl={'http://epocacosmeticos.vteximg.com.br/arquivos/ids/322953/50ml-2.jpg?v=636855001918830000'}
      itemPrice={'325,30'}
      />
    </Mural>
  );
};

export default Catalog;