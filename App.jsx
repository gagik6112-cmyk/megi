import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Phone, MapPin, Clock, Instagram, Mail } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Helmet>
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:site_name" content="Лисья Нора" />
    </Helmet>
    <header className="sticky top-0 z-50 border-b bg-white backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="text-2xl font-bold">Лисья Нора</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:underline">Главная</Link>
          <Link to="/menu" className="hover:underline">Меню</Link>
          <Link to="/bbq" className="hover:underline">Шашлыки</Link>
          <Link to="/lunch" className="hover:underline">Корпоративные обеды</Link>
          <Link to="/contacts" className="hover:underline">Контакты</Link>
        </nav>
        <Link to="/contacts"><Button className="rounded">Связаться</Button></Link>
      </div>
    </header>
    <main className="flex-grow">{children}</main>
    <footer className="border-t">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-10 px-4">
        <div className="text-xl font-bold">«Лисья Нора»</div>
        <div className="flex items-center gap-4">
          <a href="#" className="underline"><Instagram size={18}/> Instagram</a>
          <a href="mailto:info@lisyanora.example" className="underline"><Mail size={18}/> E‑mail</a>
          <a href="tel:+1234567890" className="underline"><Phone size={18}/> Позвонить</a>
        </div>
      </div>
    </footer>
  </div>
);

const HomePage = () => (
  <div>
    <Helmet>
      <title>Лисья Нора — Домашний ресторан</title>
      <meta name="description" content="Домашний ресторан с доставкой: уютная атмосфера, авторская кухня, шашлыки и корпоративные обеды." />
    </Helmet>
    <div className="relative">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop" alt="Домашний ресторан" className="w-full h-[70vh] object-cover" />
        <div className="absolute inset-0" style={{background:"rgba(0,0,0,.5)"}} />
      </div>
      <div className="relative z-10 h-[70vh] flex items-center px-4 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white" style={{maxWidth: "48rem"}}>
          <div className="inline-flex items-center gap-2 rounded px-3 py-1" style={{background:"rgba(255,255,255,.15)", backdropFilter:"blur(4px)"}}><Utensils size={16}/>Добро пожаловать домой</div>
          <h1 className="mt-4" style={{fontSize:"3rem", fontWeight:800, lineHeight:1.1}}>Домашний ресторан «Лисья Нора»</h1>
          <p className="mt-4" style={{fontSize:"1.125rem", color:"rgba(255,255,255,.9)"}}>Уютное место с авторской кухней и доставкой любимых блюд прямо к вам домой или в офис.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/menu"><Button className="rounded">Смотреть меню</Button></Link>
            <Link to="/contacts"><Button className="rounded">Связаться</Button></Link>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const MenuPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-16">
    <Helmet>
      <title>Меню — Лисья Нора</title>
      <meta name="description" content="Актуальное меню домашнего ресторана Лисья Нора: супы, горячее, десерты." />
    </Helmet>
    <h2 className="text-4xl font-bold mb-8">Меню</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <Card><CardHeader><CardTitle>Супы</CardTitle></CardHeader><CardContent>Борщ, солянка, куриный бульон…</CardContent></Card>
      <Card><CardHeader><CardTitle>Горячее</CardTitle></CardHeader><CardContent>Котлеты, рагу, рыба на пару…</CardContent></Card>
      <Card><CardHeader><CardTitle>Десерты</CardTitle></CardHeader><CardContent>Чизкейк, штрудель, медовик…</CardContent></Card>
    </div>
  </div>
);

const BBQPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-16">
    <Helmet>
      <title>Шашлыки с доставкой — Лисья Нора</title>
      <meta name="description" content="Свежие шашлыки на углях с доставкой: курица, свинина, говядина и овощи-гриль." />
    </Helmet>
    <h2 className="text-4xl font-bold mb-6">Шашлыки с доставкой</h2>
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {[
        "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1625940946487-57b6d30f6d3f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555992336-03a23c4a2f0e?q=80&w=2070&auto=format&fit=crop"
      ].map((src,i)=>(
        <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded" style={{overflow:"hidden", aspectRatio:"4/3"}}>
          <img src={src} alt={`Шашлык ${i+1}`} style={{width:"100%", height:"100%", objectFit:"cover"}} />
        </motion.div>
      ))}
    </div>
    <Card className="rounded-xl">
      <CardHeader><CardTitle>Заказать шашлык</CardTitle></CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <Input placeholder="Ваше имя" />
          <Input placeholder="Телефон" type="tel" />
          <Input placeholder="Выберите набор" />
          <Textarea placeholder="Комментарии к заказу" />
          <Button className="rounded">Отправить заказ</Button>
        </form>
      </CardContent>
    </Card>
  </div>
);

const LunchPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-16">
    <Helmet>
      <title>Корпоративные обеды — Лисья Нора</title>
      <meta name="description" content="Корпоративные обеды с доставкой: комплексные рационы под бюджет и диеты вашей команды." />
    </Helmet>
    <h2 className="text-4xl font-bold mb-6">Корпоративные обеды с доставкой</h2>
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {[
        "https://images.unsplash.com/photo-1565895405160-82dcdc04f3b4?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598514982976-e7d91f6f7c65?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1613145993489-48df4e71528a?q=80&w=2070&auto=format&fit=crop"
      ].map((src,i)=>(
        <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded" style={{overflow:"hidden", aspectRatio:"4/3"}}>
          <img src={src} alt={`Обед ${i+1}`} style={{width:"100%", height:"100%", objectFit:"cover"}} />
        </motion.div>
      ))}
    </div>
    <Card className="rounded-xl">
      <CardHeader><CardTitle>Заказать корпоративный обед</CardTitle></CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <Input placeholder="Компания" />
          <Input placeholder="Телефон" type="tel" />
          <Input placeholder="Количество человек" type="number" />
          <Textarea placeholder="Пожелания по меню" />
          <Button className="rounded">Оставить заявку</Button>
        </form>
      </CardContent>
    </Card>
  </div>
);

const ContactsPage = () => (
  <div className="max-w-6xl mx-auto px-4 py-16">
    <Helmet>
      <title>Контакты — Лисья Нора</title>
      <meta name="description" content="Контакты домашнего ресторана Лисья Нора: адрес, телефон, график работы." />
    </Helmet>
    <h2 className="text-4xl font-bold mb-6">Контакты</h2>
    <Card className="rounded-xl">
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3"><MapPin size={18}/> Ул. Примерная, 7 · Город</div>
        <div className="flex items-center gap-3"><Phone size={18}/> <a className="underline" href="tel:+1234567890">+1 (234) 567‑890</a></div>
        <div className="flex items-center gap-3"><Mail size={18}/> <a className="underline" href="mailto:info@lisyanora.example">info@lisyanora.example</a></div>
        <div className="flex items-center gap-3"><Clock size={18}/> Пн–Чт 12–22 · Пт–Сб 12–23 · Вс 12–21</div>
      </CardContent>
    </Card>
  </div>
);

const pageVariants = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -16 } };

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><HomePage /></motion.div>} />
        <Route path="/menu" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><MenuPage /></motion.div>} />
        <Route path="/bbq" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><BBQPage /></motion.div>} />
        <Route path="/lunch" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LunchPage /></motion.div>} />
        <Route path="/contacts" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ContactsPage /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
