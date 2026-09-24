export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Animais' | 'Ciência' | 'Tecnologia' | 'História' | 'Mundo';
  readingTime: string;
  date: string;
  description: string;
  image: string;
  featured?: boolean;
  popular?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      text: string;
      highlight?: string;
    }[];
    curiosityFact: string;
    conclusion: string;
  };
}

export const ARTICLES_DATA: Article[] = [
  {
    id: '1',
    slug: 'universo-coisas-impossiveis',
    title: 'O universo está cheio de coisas que parecem impossíveis',
    category: 'Ciência',
    readingTime: '5 min de leitura',
    date: '24 Set 2026',
    description: 'Descubra fatos surpreendentes e explicações curiosas para fenômenos que parecem saídos de um filme de ficção científica.',
    image: '/images/banner-curiosidades-incriveis.png',
    featured: true,
    popular: true,
    content: {
      intro: 'Quando olhamos para as estrelas à noite, estamos contemplando um laboratório cósmico que desafia nossa imaginação cotidiana. Fenômenos como buracos negros supermassivos, estrelas de nêutrons e lentes gravitacionais mostram que a física real é muitas vezes mais fascinante do que qualquer roteiro de ficção científica.',
      sections: [
        {
          heading: 'Estrelas que giram centenas de vezes por segundo',
          text: 'Pense em uma estrela com a massa do nosso Sol compactada em uma esfera de apenas 20 quilômetros de diâmetro. Isso é um pulsar. Uma única colher de chá do material de uma estrela de nêutrons pesaria bilhões de toneladas na Terra.',
          highlight: 'Uma colher de chá de matéria de estrela de nêutrons pesa o mesmo que o Monte Everest.'
        },
        {
          heading: 'O tempo realmente passa de forma diferente no espaço',
          text: 'Conforme previsto pela Teoria da Relatividade Geral de Albert Einstein, a gravidade distorce o próprio tecido do espaço-tempo. Próximo a objetos com imensa atração gravitacional, o tempo corre mais devagar em comparação com quem está longe.',
          highlight: 'Os relógios nos satélites de GPS precisam ser constantemente calibrados para compensar a relatividade temporal.'
        },
        {
          heading: 'A luz que viajou bilhões de anos até os nossos olhos',
          text: 'Ao observar galáxias distantes pelo telescópio James Webb, não estamos vendo como elas são hoje, mas sim como eram logo após o Big Bang. Olhar para o cosmos é literalmente fazer uma viagem no tempo.'
        }
      ],
      curiosityFact: 'Existe no espaço uma gigantesca nuvem de gás chamada Sagittarius B2 que contém bilhões de litros de álcool etílico e formato de etila, a mesma molécula responsável pelo aroma de framboesas!',
      conclusion: 'Quanto mais aprendemos sobre as leis fundamentais do cosmos, mais percebemos que o universo não é apenas mais estranho do que imaginamos — ele é mais estranho do que somos capazes de imaginar.'
    }
  },
  {
    id: '2',
    slug: 'polvo-tres-coracoes',
    title: 'O polvo tem três corações — e existe uma razão para isso',
    category: 'Animais',
    readingTime: '4 min de leitura',
    date: '22 Set 2026',
    description: 'Um dos animais mais inteligentes e curiosos do oceano esconde características anatômicas impressionantes.',
    image: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&w=900&q=80',
    featured: true,
    popular: true,
    content: {
      intro: 'Os polvos são considerados verdadeiros alienígenas dos nossos oceanos. Além de resolver quebra-cabeças complexos, abrir potes e camuflar sua pele em frações de segundo, sua circulação sanguínea possui uma engenharia biológica única.',
      sections: [
        {
          heading: 'Por que três corações?',
          text: 'Dois corações são chamados de corações branquiais: a função exclusiva deles é bombear o sangue desoxigenado diretamente para as brânquias para capturar oxigênio. O terceiro é o coração sistêmico, responsável por distribuir o sangue oxigenado para todos os outros órgãos e tentáculos do corpo.',
          highlight: 'Quando o polvo nada rapidamente a jato, o coração sistêmico para de bater por alguns instantes para poupar energia, razão pela qual eles preferem rastejar no fundo do mar.'
        },
        {
          heading: 'Sangue azul de verdade',
          text: 'Enquanto o sangue humano utiliza hemoglobina à base de ferro (o que confere a cor vermelha), o sangue do polvo utiliza hemocianina, que é baseada em cobre. O cobre é muito mais eficiente para transportar oxigênio em águas oceânicas extremamente frias e com baixa pressão de oxigênio.'
        },
        {
          heading: 'Neurônios espalhados pelos tentáculos',
          text: 'Cerca de dois terços de todos os neurônios de um polvo não estão localizados em sua cabeça, mas sim distribuídos ao longo de seus oito braços. Isso significa que cada tentáculo tem uma espécie de autonomia tátil para explorar fendas e reagir ao ambiente de forma semidependente.'
        }
      ],
      curiosityFact: 'Os polvos não possuem nenhum osso. O único elemento rígido em seu corpo inteiro é um bico similar ao de um papagaio, o que permite que eles passem por qualquer fresta maior que esse bico.',
      conclusion: 'A inteligência e anatomia dos polvos provam que a evolução encontrou múltiplos caminhos para criar seres de altíssima cognição e adaptabilidade na Terra.'
    }
  },
  {
    id: '3',
    slug: 'abelhas-reconhecer-rostos',
    title: 'As abelhas conseguem reconhecer rostos humanos?',
    category: 'Animais',
    readingTime: '3 min de leitura',
    date: '20 Set 2026',
    description: 'O pequeno cérebro desses insetos é capaz de realizar tarefas visuais mais complexas do que parece à primeira vista.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=900&q=80',
    featured: false,
    popular: false,
    content: {
      intro: 'O cérebro de uma abelha contém menos de um milhão de neurônios — em comparação com os 86 bilhões do cérebro humano. Mesmo assim, experimentos científicos conduzidos por neurobiólogos demonstraram que elas conseguem memorizar e reconhecer rostos humanos individuais.',
      sections: [
        {
          heading: 'O experimento da água com açúcar',
          text: 'Cientistas colocaram fotos de rostos humanos diante das abelhas. Próximo a um rosto específico, havia uma gota de água açucarada doce; próximo aos outros, uma solução amarga. Em pouco tempo, as abelhas aprenderam a voar diretamente para a foto correta, mesmo quando a recompensa era retirada.',
          highlight: 'As abelhas utilizam uma técnica de processamento visual holístico, semelhante à forma como bebês humanos identificam seus pais.'
        },
        {
          heading: 'Como elas processam o padrão?',
          text: 'Elas não enxergam expressões faciais como nós, mas memorizam as proporções espaciais geométricas entre olhos, nariz e boca, tratando o rosto humano como um mapa ou padrão de pétala de flor muito específico.'
        }
      ],
      curiosityFact: 'Abelhas também compreendem o conceito matemático de zero — algo que crianças humanas levam até os 4 anos de idade para assimilar completamente!',
      conclusion: 'Essas descobertas desafiam os limites da miniaturização cognitiva e mostram que a natureza consegue realizar computações neurais inacreditáveis com pouquíssima energia.'
    }
  },
  {
    id: '4',
    slug: 'por-que-ceu-azul',
    title: 'Por que o céu é azul durante o dia?',
    category: 'Ciência',
    readingTime: '4 min de leitura',
    date: '18 Set 2026',
    description: 'Uma explicação simples e fascinante para um dos fenômenos mais comuns que vemos todos os dias.',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=80',
    featured: true,
    popular: false,
    content: {
      intro: 'A luz do Sol que chega até a Terra nos parece branca, mas na verdade é composta por todas as cores do arco-íris misturadas. Ao entrar na atmosfera do nosso planeta, essa luz interage com gases e partículas em um processo chamado Espalhamento de Rayleigh.',
      sections: [
        {
          heading: 'Comprimentos de onda da luz',
          text: 'A luz viaja em ondas eletromagnéticas. A luz vermelha e laranja tem comprimentos de onda mais longos e fáceis de passar direto. Já a luz azul e violeta viaja em ondas muito mais curtas e agitadas.',
          highlight: 'Gases como nitrogênio e oxigênio na atmosfera dispersam a luz azul em todas as direções cerca de 10 vezes mais que a luz vermelha.'
        },
        {
          heading: 'E por que o pôr do sol é alaranjado ou avermelhado?',
          text: 'No fim do dia, o Sol está mais baixo no horizonte. Isso significa que seus raios precisam atravessar uma camada de atmosfera muito mais espessa até chegarem aos seus olhos. Quase todo o azul já foi espalhado no caminho, sobrando apenas os tons quentes de vermelho e amarelo.'
        }
      ],
      curiosityFact: 'Se nossos olhos tivessem a mesma sensibilidade para o espectro violeta quanto têm para o azul, nós veríamos o céu em um tom lilás-azulado brilhante!',
      conclusion: 'A física óptica transforma a interação entre gás invisível e fótons solares na maior tela colorida do nosso cotidiano.'
    }
  },
  {
    id: '5',
    slug: 'como-internet-funciona',
    title: 'Afinal, como a internet consegue levar dados pelo mundo?',
    category: 'Tecnologia',
    readingTime: '6 min de leitura',
    date: '16 Set 2026',
    description: 'Por trás de cada mensagem instantânea, vídeo e site existe uma colossal rede de cabos submarinos e protocolos trabalhando em milissegundos.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80',
    featured: false,
    popular: true,
    content: {
      intro: 'Muitas pessoas imaginam que a internet global funcione quase inteiramente através de satélites no espaço. A verdade é muito mais tangível e surpreendente: mais de 98% de todo o tráfego internacional de internet viaja por cabos de fibra óptica repousados no fundo dos oceanos.',
      sections: [
        {
          heading: 'Os cabos no fundo dos oceanos',
          text: 'Existem mais de 500 cabos submarinos intercontinentais ativos no planeta. No interior desses cabos, fios de vidro puro da espessura de um fio de cabelo humano transmitem pulsos de laser codificados em zeros e uns na velocidade da luz.',
          highlight: 'A espessura média de um cabo submarino de dados é parecida com a de uma mangueira de jardim doméstica.'
        },
        {
          heading: 'Pacotes que se remontam no seu celular',
          text: 'Quando você carrega uma página ou vídeo, o arquivo é quebrado em milhares de pequenos pacotes de dados. Cada pacote pode fazer uma rota física diferente pelo planeta e é reagrupado ordenadamente pelo seu navegador em milissegundos.'
        }
      ],
      curiosityFact: 'Os primeiros cabos telegráficos transatlânticos foram instalados em 1858 — e precisavam de minutos inteiros para enviar uma única palavra em código Morse entre a Europa e os Estados Unidos.',
      conclusion: 'A internet é a maior obra de engenharia colaborativa da história humana, conectando bilhões de mentes em tempo real.'
    }
  },
  {
    id: '6',
    slug: 'origem-palavras-cotidiano',
    title: 'De onde vêm algumas das palavras que usamos todos os dias?',
    category: 'História',
    readingTime: '5 min de leitura',
    date: '14 Set 2026',
    description: 'Alguns termos comuns carregam histórias curiosas que atravessaram séculos e impérios até chegarem ao nosso vocabulário.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80',
    featured: false,
    popular: false,
    content: {
      intro: 'As línguas vivas são fósseis culturais. Cada palavra que pronunciamos carrega cicatrizes de guerras, trocas comerciais, erros de tradução e costumes de povos antigos que viveram há milhares de anos.',
      sections: [
        {
          heading: 'Salário vem de Sal',
          text: 'Na Roma Antiga, o sal era um recurso vital para conservar carnes e alimentos. Soldados legionários frequentemente recebiam uma cota de sal ou uma quantia em dinheiro destinada a adquiri-lo — chamada de *salarium*.',
          highlight: 'É da palavra "salarium" que nasce o termo "salário" usado no mundo inteiro até os dias de hoje.'
        },
        {
          heading: 'Candidato e a cor branca',
          text: 'Também em Roma, quando alguém concorria a um cargo público no Senado, usava uma toga extremamente alva e clareada com giz, chamada *toga candida* (de onde vem também a palavra cândido, que significa brilhante ou puro), para demonstrar retidão moral.'
        },
        {
          heading: 'Quarentena nem sempre durou quarenta dias',
          text: 'Na Veneza medieval do século XIV, navios vindos de portos com peste bubônica precisavam ancorar e aguardar 40 dias (*quaranta giorni*) antes que tripulantes e cargas pudessem desembarcar.'
        }
      ],
      curiosityFact: 'A palavra "Ok" começou como uma brincadeira satírica de jornalistas de Boston em 1839, que abreviam de propósito a frase com erro proposital: "Oll Korrect" (All correct).',
      conclusion: 'Falar uma língua é dialogar involuntariamente com toda a árvore genealógica de nossas civilizações passadas.'
    }
  },
  {
    id: '7',
    slug: 'lugares-incriveis-outro-planeta',
    title: 'Lugares reais que parecem ter saído de outro planeta',
    category: 'Mundo',
    readingTime: '5 min de leitura',
    date: '12 Set 2026',
    description: 'Existem paisagens na Terra com geologia tão incomum que desafiam o que imaginamos ser possível encontrar na natureza.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    featured: false,
    popular: true,
    content: {
      intro: 'Você não precisa embarcar em uma nave espacial para conhecer terrenos alienígenas. Nosso próprio planeta abriga locais com cores psicodélicas, formações rochosas bizarras e ecossistemas isolados por milhões de anos.',
      sections: [
        {
          heading: 'A Ilha de Socotra no Oceano Índico',
          text: 'Localizada no Iêmen, a ilha de Socotra possui árvores chamadas Sangue de Dragão, com copas em formato de cogumelo invertido que secretam uma seiva vermelha brilhante. Mais de 30% das espécies de plantas dessa ilha não existem em nenhum outro lugar do planeta.',
          highlight: 'Cientistas apelidaram Socotra de "o lugar mais alienígena da Terra".'
        },
        {
          heading: 'Salar de Uyuni na Bolívia',
          text: 'O maior deserto de sal do mundo cobre mais de 10.000 quilômetros quadrados. Durante o período de chuvas, uma fina camada de água transforma o solo no maior espelho natural do planeta, refletindo o céu de forma contínua sem linha do horizonte.'
        },
        {
          heading: 'A Caverna dos Cristais Gigantes no México',
          text: 'A 300 metros abaixo da terra em Naica, essa caverna contém vigas de selenita que chegam a 12 metros de comprimento e pesam 55 toneladas cada. As temperaturas internas atingem 58°C com 99% de umidade.'
        }
      ],
      curiosityFact: 'Na depressão de Danakil, na Etiópia, há piscinas borbulhantes de ácido sulfúrico e enxofre em tons verde-limão e amarelo-neon onde nenhuma forma de vida conhecida consegue sobreviver.',
      conclusion: 'A Terra é repleta de maravilhas extremas que nos lembram quão rica e variada é a geologia do nosso lar.'
    }
  },
  {
    id: '8',
    slug: 'planeta-chuva-vidro',
    title: 'Existe um planeta onde pode chover vidro de lado',
    category: 'Mundo',
    readingTime: '3 min de leitura',
    date: '10 Set 2026',
    description: 'Os ventos em um exoplaneta distante são tão intensos que transformam partículas de silicato em uma tempestade extraordinária.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
    featured: true,
    popular: true,
    content: {
      intro: 'A cerca de 64 anos-luz da Terra na constelação de Raposa, orbita o exoplaneta HD 189733b. Visto de longe por telescópios espaciais como o Hubble, ele tem uma linda cor azul cobalto profunda, parecendo um oceano pacífico. Porém, a realidade é um dos ambientes mais letais do universo conhecido.',
      sections: [
        {
          heading: 'Ventos supersônicos a 8.700 km/h',
          text: 'Os ventos na atmosfera desse planeta viajam a velocidades impressionantes de até 2 km por segundo — quase 7 vezes a velocidade do som. Isso é rápido o suficiente para circular o planeta inteiro em poucas horas.',
          highlight: 'A atmosfera rica em silicato condensa cristais de vidro que são arrastados horizontalmente por ventos supersônicos.'
        },
        {
          heading: 'Chuva lateral cortante',
          text: 'A temperatura na face diurna passa de 1.000°C. Esse calor extremo evapora compostos de silicato, que ao subirem para camadas mais frias, se condensam em pequenos pedaços de vidro fundido impulsionados na horizontal pelos ventos brutais.'
        }
      ],
      curiosityFact: 'O tom azul brilhante do planeta não vem de oceanos de água como na Terra, mas da reflexão da luz estelar em tempestades de partículas de vidro em sua atmosfera superior!',
      conclusion: 'Planetas como HD 189733b mostram a incrível variedade climática que existe no cosmos fora do nosso Sistema Solar.'
    }
  },
  {
    id: '9',
    slug: 'corpo-emite-luz-invisivel',
    title: 'Seu corpo emite uma luz invisível a olhos humanos',
    category: 'Ciência',
    readingTime: '4 min de leitura',
    date: '08 Set 2026',
    description: 'Nossas células liberam continuamente uma pequena quantidade de fótons durante os processos bioquímicos vitais.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
    featured: true,
    popular: false,
    content: {
      intro: 'Pode parecer metáfora poética, mas a ciência comprovou: todos os seres humanos emitem luz visível própria, literalmente brilhando no escuro. A única razão pela qual não nos vemos brilhando como vaga-lumes é porque a intensidade dessa luz é cerca de 1.000 vezes mais fraca do que o limiar mínimo detectável pela visão humana.',
      sections: [
        {
          heading: 'Bioluminescência ultrassensível',
          text: 'Pesquisadores japoneses do Instituto de Tecnologia de Tohoku usaram câmeras criogênicas ultrassensíveis com sensores CCD capazes de detectar fótons individuais para monitorar voluntários em salas completamente escuras.',
          highlight: 'O brilho do corpo humano atinge seu pico diário no final da tarde, por volta das 16h, quando a atividade metabólica celular é máxima.'
        },
        {
          heading: 'De onde vem essa luminosidade?',
          text: 'A emissão de biofótons é o subproduto natural da respiração celular metabólica, quando radicais livres interagem com lipídios e proteínas liberando fótons energéticos durante reações de oxidação.'
        }
      ],
      curiosityFact: 'O rosto é a região do corpo que mais emite fótons, especialmente as bochechas e a testa, provavelmente devido à maior vascularização e exposição.',
      conclusion: 'Cada batimento cardíaco e respiração mantém acesa uma centelha quântica em nossas células.'
    }
  },
  {
    id: '10',
    slug: 'floresta-conversa-subsolo',
    title: 'A floresta que parece conversar por baixo da terra',
    category: 'Mundo',
    readingTime: '4 min de leitura',
    date: '05 Set 2026',
    description: 'Redes de fungos conectam raízes e ajudam árvores a trocar nutrientes, água e avisos de perigo.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    featured: true,
    popular: false,
    content: {
      intro: 'Por décadas, a ecologia tradicional considerava que as árvores de uma floresta competiam ferrenhamente apenas entre si por luz solar e água. Contudo, pesquisas revolucionárias da bióloga Suzanne Simard revelaram a existência da chamada "Wood Wide Web": uma intrincada rede de micorrizas subterrâneas que conecta árvores em uma comunidade cooperativa.',
      sections: [
        {
          heading: 'A rede micorrízica',
          text: 'Fungos benéficos envolvem as pontas das raízes das plantas em troca de carbono e glicose sintetizados pela fotossíntese. Em contrapartida, as hifas dos fungos alcançam quilômetros de distância, canalizando água e minerais essenciais para as árvores.',
          highlight: 'Árvores mães mais velhas transmitem açúcares e nutrientes vitais para mudas jovens que ainda crescem na sombra do dossel florestal.'
        },
        {
          heading: 'Sinais de alarme químicos',
          text: 'Quando uma árvore é atacada por insetos ou pragas, ela envia impulsos químicos através da rede de fungos para alertar árvores vizinhas. As vizinhas recebem o aviso e passam a produzir taninos defensivos antes mesmo de serem tocadas pela praga!'
        }
      ],
      curiosityFact: 'Um único passo em solo florestal intocado pisa sobre centenas de quilômetros lineares de filamentos de fungos microscopicamente finos!',
      conclusion: 'As florestas não são coleções isoladas de madeira, mas superorganismos vivos e interconectados.'
    }
  },
  {
    id: '11',
    slug: 'lugar-mais-silencioso-terra',
    title: 'O lugar mais silencioso do planeta pode fazer você ouvir o próprio corpo',
    category: 'Mundo',
    readingTime: '3 min de leitura',
    date: '02 Set 2026',
    description: 'Uma câmara anecóica especial absorve quase 100% de todo reflexo sonoro e altera a experiência humana da audição.',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',
    featured: false,
    popular: true,
    content: {
      intro: 'No laboratório da Microsoft em Redmond, Washington, existe uma câmara anecóica com o nível de ruído de fundo medido em incríveis -20,35 decibéis — o limite teórico do movimento browniano de partículas de ar.',
      sections: [
        {
          heading: 'Ouvindo o sangue correndo nas veias',
          text: 'Sem nenhuma reflexão sonora de paredes, tetos ou piso, seu cérebro começa a amplificar qualquer ruído interno. Em poucos minutos sentado no escuro dentro da câmara, você consegue ouvir nitidamente o bater do seu próprio coração, o ar entrando nos alvéolos pulmonares e até o zumbido sutil do sistema nervoso.',
          highlight: 'A maioria das pessoas não aguenta ficar mais de 30 a 45 minutos sozinha dentro dessa câmara antes de começar a se sentir desorientada.'
        }
      ],
      curiosityFact: 'Como nosso equilíbrio depende em grande parte de referências acústicas espaciais inconscientes, pessoas em salas totalmente silenciosas perdem a firmeza para ficar de pé e precisam sentar!',
      conclusion: 'O silêncio absoluto não é a ausência de som, mas o momento em que você finalmente escuta o som da sua própria vida.'
    }
  },
  {
    id: '12',
    slug: 'inteligencia-artificial-linguas-perdidas',
    title: 'A inteligência artificial já ajuda a decifrar línguas perdidas',
    category: 'Tecnologia',
    readingTime: '5 min de leitura',
    date: '28 Ago 2026',
    description: 'Modelos neurais encontram padrões ocultos em tabuletas cuneiformes e inscrições antigas que pareciam indecifráveis.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    featured: false,
    popular: false,
    content: {
      intro: 'Milhares de tábuas de argila da antiga Mesopotâmia jazem em porões de museus sem tradução, desgastadas pelo tempo e com fragmentos perdidos. Pesquisadores agora combinam arqueologia com inteligência artificial para reconstruir idiomas de mais de 4.000 anos.',
      sections: [
        {
          heading: 'Restaurando textos com milhares de anos',
          text: 'Algoritmos de aprendizado profundo são treinados na gramática e vocabulário de línguas acadianas e sumérias conhecidas. Quando encontram uma frase com uma palavra quebrada ou apagada, o modelo prevê com até 85% de precisão as palavras originais ausentes.',
          highlight: 'A IA conseguiu traduzir em semanas coleções que levariam décadas de trabalho manual de epigrafistas.'
        }
      ],
      curiosityFact: 'Muitas das inscrições antigas mais comuns encontradas em tabuletas da Babilônia não falavam de grandes reis ou profecias, mas de reclamações de clientes insatisfeitos com qualidade do cobre vendido!',
      conclusion: 'A inteligência artificial não serve apenas para olhar para o futuro, mas para dar voz a seres humanos que viveram milhares de anos atrás.'
    }
  }
];

export const CATEGORIES = ['Todos', 'Animais', 'Ciência', 'Tecnologia', 'História', 'Mundo'] as const;
