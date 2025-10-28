import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, type AccordionItem } from "./index";
import { FileText, Zap, Star, Heart, Cpu, Code, Database, Globe, Sparkles, Rocket } from "lucide-react";

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

const frontendData: AccordionItem[] = [
  {
    title: "React Server Components",
    body: "RSCs renderizam no servidor sem enviar JavaScript ao cliente. Permitem acesso direto a banco de dados, filesystem e APIs privadas. Componentes 'use client' ainda existem para interatividade. Next.js App Router é a implementação mais popular.",
    icon: <Code size={18} />,
  },
  {
    title: "Signals: O novo paradigma de reatividade",
    body: "Signals são primitivos reativos fine-grained que atualizam apenas o que mudou, sem Virtual DOM. Solid.js pioneirou, agora Vue 3.4, Preact e Angular adotaram. Melhor performance que useState/setState pois evita re-renders desnecessários. Qwik leva signals ao extremo com resumability.",
    icon: <Sparkles size={18} />,
  },
  {
    title: "Streaming SSR e Progressive Hydration",
    body: "Em vez de esperar toda a página renderizar, streaming SSR envia HTML em chunks. Progressive hydration ativa JavaScript apenas quando o usuário interage. Reduz Time to Interactive drasticamente. React 18 Suspense e Next.js 13+ implementam nativamente.",
    icon: <Rocket size={18} />,
  },
];

const performanceData: AccordionItem[] = [
  {
    title: "Core Web Vitals e como otimizar",
    body: "LCP (Largest Contentful Paint) deve ser < 2.5s, FID (First Input Delay) < 100ms, CLS (Cumulative Layout Shift) < 0.1. Use lazy loading para imagens, code splitting para JS, preconnect para fonts. Lighthouse e PageSpeed Insights medem automaticamente.",
    icon: <Zap size={18} />,
  },
  {
    title: "HTTP/3 e QUIC Protocol",
    body: "HTTP/3 usa QUIC sobre UDP em vez de TCP, eliminando head-of-line blocking. Conexões sobrevivem mudanças de rede (Wi-Fi para 4G). 0-RTT permite requests instantâneos em reconexões. Cloudflare, Google e Facebook já usam extensivamente. 25% da web já roda HTTP/3.",
    icon: <Globe size={18} />,
  },
  {
    title: "Edge Functions e Distributed Computing",
    body: "Edge functions rodam em CDN nodes próximos ao usuário, não em um servidor central. Vercel Edge, Cloudflare Workers e Deno Deploy executam código em 250+ cidades globalmente. Latência < 50ms para qualquer usuário. Ideal para A/B tests, personalização e auth.",
    icon: <Database size={18} />,
  },
];

const backendData: AccordionItem[] = [
  {
    title: "tRPC: Type-safe APIs sem GraphQL",
    body: "tRPC permite criar APIs fullstack TypeScript onde frontend e backend compartilham tipos automaticamente. Zero runtime overhead, autocomplete perfeito, refactoring seguro. Elimina necessidade de schemas GraphQL ou validação manual. T3 Stack popularizou para Next.js.",
    icon: <Code size={18} />,
  },
  {
    title: "Serverless vs Containers: quando usar cada um",
    body: "Serverless (Lambda, Cloud Functions) é ideal para cargas variáveis, paga por execução, cold start de ~100ms. Containers (ECS, Kubernetes) melhor para workloads constantes, controle total, sem cold starts. Hybrid approach: APIs em containers, workers em serverless.",
    icon: <Rocket size={18} />,
  },
  {
    title: "Prisma e Type-safe Database Access",
    body: "Prisma gera TypeScript client baseado no schema do banco. Autocomplete para queries, migrations automáticas, suporta PostgreSQL, MySQL, MongoDB. Alternativas: Drizzle (mais leve), Kysely (query builder minimalista). ORMs modernos focam em DX sem sacrificar performance.",
    icon: <Database size={18} />,
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
    data: frontendData,
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
    data: performanceData,
    variant: "default",
    minimal: true,
  },
};

export const PlusMinusIcons: Story = {
  args: {
    data: backendData,
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
    data: performanceData,
    variant: "pill",
    defaultOpen: true,
    highlightColor: "blue-500",
  },
};

export const CustomIcons: Story = {
  args: {
    data: [
      {
        title: "Astro: O framework para sites estáticos do futuro",
        body: "Astro gera sites 100% estáticos por padrão (zero JS!). Islands Architecture hidrata apenas componentes interativos. Suporta React, Vue, Svelte no mesmo projeto. Ideal para blogs, docs e landing pages. Build times 10x mais rápidos que Gatsby.",
        icon: <Rocket size={18} />,
        actionOpenIcon: <Star size={16} fill="currentColor" />,
        actionClosedIcon: <Star size={16} />,
      },
      {
        title: "Zod e Type-safe Validation",
        body: "Zod valida dados em runtime e gera tipos TypeScript automaticamente. Perfeito para validar forms, APIs e variáveis de ambiente. Integra com React Hook Form e tRPC. Alternativas: Yup (mais antigo), Valibot (mais leve, 1KB). Runtime safety é essencial.",
        icon: <Code size={18} />,
        actionOpenIcon: <Heart size={16} fill="currentColor" />,
        actionClosedIcon: <Heart size={16} />,
      },
      {
        title: "Hono: Framework web ultrarrápido para Edge",
        body: "Hono é express-like mas 10x mais rápido, roda em qualquer runtime (Node, Bun, Deno, Cloudflare Workers). Middleware system poderoso, roteamento ultra-otimizado, TypeScript first. Menor que 20KB. Ideal para APIs em edge functions.",
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
        <Accordion data={frontendData} variant="pill" highlightColor="purple-500" />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    data: performanceData,
    variant: "pill",
    minimal: false,
    exclusive: true,
    defaultOpen: false,
    highlightColor: "indigo-500",
    iconsPreset: "chevron",
  },
};