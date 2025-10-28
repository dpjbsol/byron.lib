import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, type AccordionItem } from "./index";
import { FileText, Zap, Star, Heart, Cpu, Code, Database } from "lucide-react";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pill"],
      description: "Estilo visual do accordion",
    },
    minimal: {
      control: "boolean",
      description: "Remove o ícone de ação do lado direito",
    },
    exclusive: {
      control: "boolean",
      description: "Se true, apenas um item pode estar aberto por vez",
    },
    defaultOpen: {
      control: "boolean",
      description: "Se true, o primeiro item começa aberto",
    },
    highlightColor: {
      control: "select",
      options: [
        "indigo-500",
        "blue-500",
        "emerald-500",
        "purple-500",
        "rose-500",
        "amber-500",
      ],
      description: "Cor de destaque (variant pill)",
    },
    iconsPreset: {
      control: "select",
      options: ["chevron", "plusminus"],
      description: "Preset de ícones para estado aberto/fechado",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const webTechData: AccordionItem[] = [
  {
    title: "O que é Bun e por que ele é revolucionário?",
    body: "Bun é um runtime JavaScript all-in-one que rivaliza com Node.js e Deno. Escrito em Zig, ele é incrivelmente rápido - até 4x mais rápido que Node.js em alguns benchmarks. Inclui bundler, transpiler, package manager e test runner nativamente. Compatível com APIs do Node.js e suporta TypeScript out-of-the-box.",
  },
  {
    title: "Por que o Rust está dominando o desenvolvimento de ferramentas?",
    body: "Rust conquistou o ecossistema JavaScript através de ferramentas como SWC (transpiler), Turbopack (bundler), e Tauri (framework desktop). Oferece performance próxima de C/C++ com segurança de memória garantida em tempo de compilação. Zero-cost abstractions significam que código elegante não sacrifica velocidade.",
  },
  {
    title: "WebAssembly vai substituir JavaScript?",
    body: "WASM não substitui JavaScript, mas complementa. Permite rodar código de linguagens como C++, Rust e Go no browser com performance próxima de nativo. Ideal para games, edição de vídeo/imagem, simulações científicas e criptografia. Figma, Google Earth e AutoCAD web já usam WASM extensivamente.",
  },
];

const aiTechData: AccordionItem[] = [
  {
    title: "Transformers e Atenção",
    body: "A arquitetura Transformer revolucionou AI em 2017 com o mecanismo de self-attention. Diferente de RNNs, processa sequências em paralelo calculando relevância entre todas as palavras simultaneamente. GPT, BERT, Claude e outros LLMs são todos baseados em Transformers com bilhões de parâmetros.",
    icon: <Cpu size={18} />,
  },
  {
    title: "Edge Computing para IA",
    body: "Modelos de IA estão migrando para dispositivos locais. LLaMA quantizado roda em smartphones, browsers executam modelos via ONNX Runtime e WebGPU. Benefícios: privacidade, latência zero, funciona offline. Apple Neural Engine, Google Tensor e Qualcomm Hexagon aceleram inferência local.",
    icon: <Zap size={18} />,
  },
  {
    title: "Vector Databases",
    body: "Bancos de dados vetoriais como Pinecone, Weaviate e Qdrant armazenam embeddings para busca semântica. Essenciais para RAG (Retrieval Augmented Generation), permitindo que LLMs acessem conhecimento específico. HNSW e IVF são algoritmos comuns para busca aproximada de vizinhos mais próximos.",
    icon: <Database size={18} />,
  },
];

const devToolsData: AccordionItem[] = [
  {
    title: "Biome: O sucessor do ESLint + Prettier",
    body: "Biome é uma toolchain JavaScript escrita em Rust que unifica linting e formatting. 100x mais rápido que ESLint, configura-se em segundos e tem zero dependências. Criado pelos desenvolvedores do Rome (RIP). Suporta TypeScript, JSX e tem import sorting nativo.",
    icon: <Code size={18} />,
  },
  {
    title: "Turborepo e Monorepos Modernos",
    body: "Turborepo otimiza builds em monorepos através de cache inteligente e execução paralela. Detecta dependências entre pacotes automaticamente e só rebuilda o necessário. Nx é alternativa popular. Vercel, Netflix e Microsoft usam monorepos com centenas de projetos no mesmo repo.",
    icon: <FileText size={18} />,
  },
  {
    title: "byron.accordion",
    body: "Este componente Accordion foi criado com atenção aos detalhes, performance e acessibilidade. TypeScript para type-safety, Tailwind para styling consistente, e Lucide para ícones elegantes. Testado em produção e pronto para escalar. Obrigado por usar byron.lib! 🚀",
    icon: <Heart size={18} />,
  },
];

export const Default: Story = {
  args: {
    data: webTechData,
    variant: "default",
  },
};

export const Pill: Story = {
  args: {
    data: webTechData,
    variant: "pill",
    highlightColor: "purple-500",
  },
};

export const WithIcons: Story = {
  args: {
    data: aiTechData,
    variant: "default",
  },
};

export const Minimal: Story = {
  args: {
    data: webTechData,
    variant: "default",
    minimal: true,
  },
};

export const PlusMinusIcons: Story = {
  args: {
    data: webTechData,
    variant: "default",
    iconsPreset: "plusminus",
  },
};

export const MultipleOpen: Story = {
  args: {
    data: devToolsData,
    variant: "pill",
    exclusive: false,
    highlightColor: "emerald-500",
  },
};

export const StartOpen: Story = {
  args: {
    data: webTechData,
    variant: "pill",
    defaultOpen: true,
    highlightColor: "blue-500",
  },
};

export const CustomIcons: Story = {
  args: {
    data: [
      {
        title: "React Server Components",
        body: "RSCs renderizam no servidor sem enviar JavaScript ao cliente. Permitem acesso direto a banco de dados, filesystem e APIs privadas. Componentes 'use client' ainda existem para interatividade. Next.js App Router é a implementação mais popular.",
        icon: <Code size={18} />,
        actionOpenIcon: <Star size={16} fill="currentColor" />,
        actionClosedIcon: <Star size={16} />,
      },
      {
        title: "TanStack Query (React Query)",
        body: "Biblioteca de data fetching que gerencia cache, revalidação e estados de loading/error automaticamente. Suporta infinite scroll, optimistic updates e prefetching. Funciona com REST, GraphQL e qualquer fonte de dados assíncrona.",
        icon: <Database size={18} />,
        actionOpenIcon: <Heart size={16} fill="currentColor" />,
        actionClosedIcon: <Heart size={16} />,
      },
      {
        title: "Vite vs Webpack",
        body: "Vite usa ESM nativo durante dev (sem bundling) para HMR instantâneo. Produção usa Rollup. Webpack continua poderoso para configurações complexas mas setup é trabalhoso. Vite tem melhor DX e é padrão em Vue, Svelte e projetos modernos.",
        icon: <Zap size={18} />,
      },
    ],
    variant: "pill",
    highlightColor: "pink-500",
  },
};

const colorShowcaseColors = [
  { name: "Blue", value: "blue-500" as const },
  { name: "Emerald", value: "emerald-500" as const },
  { name: "Rose", value: "rose-500" as const },
  { name: "Amber", value: "amber-500" as const },
];

export const ColorShowcase: Story = {
  render: () => (
    <div className="space-y-6">
      {colorShowcaseColors.map(({ name, value }) => (
        <div key={value}>
          <h3 className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {name}
          </h3>
          <Accordion
            data={webTechData.slice(0, 2)}
            variant="pill"
            highlightColor={value}
            defaultOpen
          />
        </div>
      ))}
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Default Variant
        </h3>
        <Accordion data={aiTechData} variant="default" />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Pill Variant
        </h3>
        <Accordion data={aiTechData} variant="pill" highlightColor="purple-500" />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    data: aiTechData,
    variant: "pill",
    minimal: false,
    exclusive: true,
    defaultOpen: false,
    highlightColor: "indigo-500",
    iconsPreset: "chevron",
  },
};