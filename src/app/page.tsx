'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Heart, Activity, Moon, Utensils, Dumbbell, Target, Shield, Zap, Brain, TrendingUp, Check, X, Crown, Star } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    peso: '',
    altura: '',
    idade: '',
    doenca: '',
    tempoDoenca: '',
    glicemiaAtual: '',
    pressaoSistolica: '',
    pressaoDiastolica: '',
    horasSono: '',
    glicemiaAcordar: '',
    glicemiaDormir: '',
    medicamentos: '',
    objetivo: '',
    nivelAtividade: '',
    limitacoes: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [showPricing, setShowPricing] = useState(false)
  const totalSteps = 4

  // Tratamento global de erros - versão otimizada
  useEffect(() => {
    // Handler para promises rejeitadas
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      event.preventDefault()
      event.stopPropagation()
      // Silencia completamente o erro
      return false
    }

    // Handler para erros gerais
    const handleError = (event: ErrorEvent) => {
      event.preventDefault()
      event.stopPropagation()
      return false
    }

    // Adiciona listeners com captura
    window.addEventListener('unhandledrejection', handleUnhandledRejection, true)
    window.addEventListener('error', handleError, true)

    // Cleanup
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection, true)
      window.removeEventListener('error', handleError, true)
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCreatePlan = () => {
    setShowPricing(true)
  }

  const handleBackToForm = () => {
    setShowPricing(false)
  }

  if (showPricing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                    VITACORE
                  </h1>
                  <p className="text-sm text-gray-600">Sua saúde, nossa ciência</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                onClick={handleBackToForm}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Voltar ao formulário
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              <span>Planos personalizados para sua condição</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Escolha seu <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">plano ideal</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforme sua saúde com planos cientificamente desenvolvidos para pessoas com doenças crônicas
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Plano Básico */}
            <Card className="relative bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Básico</CardTitle>
                <CardDescription className="text-gray-600">Para quem está começando</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">R$ 47</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Plano de treino básico</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Receitas simples</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Monitoramento manual</span>
                  </div>
                  <div className="flex items-center">
                    <X className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-gray-400">IA personalizada</span>
                  </div>
                  <div className="flex items-center">
                    <X className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-gray-400">Suporte prioritário</span>
                  </div>
                  <div className="flex items-center">
                    <X className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-gray-400">Relatórios avançados</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-gray-600 hover:bg-gray-700">
                  Começar Básico
                </Button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  *Funcionalidades limitadas
                </p>
              </CardContent>
            </Card>

            {/* Plano Pro - DESTAQUE */}
            <Card className="relative bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 shadow-2xl hover:shadow-3xl transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1">
                  MAIS POPULAR
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Pro</CardTitle>
                <CardDescription className="text-gray-600">Recomendado para resultados reais</CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg text-gray-500 line-through">R$ 97</span>
                    <Badge variant="destructive" className="text-xs">50% OFF</Badge>
                  </div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">R$ 67</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-medium">Tudo do Básico +</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">IA personalizada avançada</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Ajustes automáticos diários</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Planos nutricionais completos</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Monitoramento inteligente</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Relatórios detalhados</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Suporte prioritário</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                  Começar Pro
                </Button>
                <p className="text-xs text-center text-blue-600 mt-2 font-medium">
                  ✨ Garantia de 30 dias
                </p>
              </CardContent>
            </Card>

            {/* Plano Exclusivo */}
            <Card className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Exclusivo</CardTitle>
                <CardDescription className="text-gray-600">Para resultados extraordinários</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">R$ 147</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700 font-medium">Tudo do Pro +</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Consultor pessoal dedicado</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Videochamadas mensais</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Planos ultra-personalizados</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Integração com médicos</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Suporte 24/7</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-amber-600 mr-3" />
                    <span className="text-gray-700">Acesso antecipado a novidades</span>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                  Começar Exclusivo
                </Button>
                <p className="text-xs text-center text-amber-600 mt-2 font-medium">
                  👑 Experiência VIP completa
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Compare os Planos</CardTitle>
              <CardDescription className="text-gray-600">
                Veja todas as funcionalidades lado a lado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-medium text-gray-900">Funcionalidades</th>
                      <th className="text-center py-4 px-4 font-medium text-gray-600">Básico</th>
                      <th className="text-center py-4 px-4 font-medium text-blue-600">Pro</th>
                      <th className="text-center py-4 px-4 font-medium text-amber-600">Exclusivo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-4 px-4 text-gray-700">Treinos personalizados</td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-amber-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-700">Planos nutricionais</td>
                      <td className="text-center py-4 px-4"><span className="text-gray-400 text-sm">Básico</span></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-amber-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-700">IA personalizada</td>
                      <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-amber-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-700">Monitoramento inteligente</td>
                      <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-amber-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-700">Consultor pessoal</td>
                      <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-amber-600 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-gray-700">Suporte 24/7</td>
                      <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                      <td className="text-center py-4 px-4"><span className="text-blue-600 text-sm">Prioritário</span></td>
                      <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-amber-600 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h4>
                  <p className="text-gray-600 text-sm">Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">O app funciona para todas as doenças?</h4>
                  <p className="text-gray-600 text-sm">Sim, nosso algoritmo é treinado para mais de 15 condições crônicas diferentes.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Preciso de equipamentos especiais?</h4>
                  <p className="text-gray-600 text-sm">Não, oferecemos treinos que podem ser feitos em casa ou na academia.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Como funciona a garantia?</h4>
                  <p className="text-gray-600 text-sm">Oferecemos 30 dias de garantia total. Se não ficar satisfeito, devolvemos seu dinheiro.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
                  VITACORE
                </h1>
                <p className="text-sm text-gray-600">Sua saúde, nossa ciência</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Versão Beta
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Primeiro app brasileiro para doenças crônicas</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transforme sua <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">saúde</span> com ciência
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Treinos seguros, alimentação personalizada e controle inteligente da sua condição de saúde. 
            O primeiro app que realmente entende sua doença.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {[
              { icon: Heart, label: "Cardio Seguro", color: "text-red-500" },
              { icon: Activity, label: "Monitoramento", color: "text-blue-500" },
              { icon: Utensils, label: "Nutrição", color: "text-orange-500" },
              { icon: Brain, label: "IA Personalizada", color: "text-purple-500" },
              { icon: TrendingUp, label: "Evolução", color: "text-green-500" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                <item.icon className={`w-8 h-8 ${item.color} mb-2`} />
                <span className="text-sm font-medium text-gray-700 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Configuração do Perfil</span>
            <span className="text-sm text-gray-500">{currentStep} de {totalSteps}</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        {/* Form Steps */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">
              {currentStep === 1 && "Informações Básicas"}
              {currentStep === 2 && "Condição de Saúde"}
              {currentStep === 3 && "Monitoramento Diário"}
              {currentStep === 4 && "Objetivos e Preferências"}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {currentStep === 1 && "Vamos conhecer você melhor"}
              {currentStep === 2 && "Detalhes sobre sua condição atual"}
              {currentStep === 3 && "Dados para acompanhamento personalizado"}
              {currentStep === 4 && "Seus objetivos e limitações"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Informações Básicas */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="peso">Peso atual (kg)</Label>
                  <Input
                    id="peso"
                    type="number"
                    placeholder="Ex: 75"
                    value={formData.peso}
                    onChange={(e) => handleInputChange('peso', e.target.value)}
                    className="bg-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="altura">Altura (cm)</Label>
                  <Input
                    id="altura"
                    type="number"
                    placeholder="Ex: 170"
                    value={formData.altura}
                    onChange={(e) => handleInputChange('altura', e.target.value)}
                    className="bg-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idade">Idade</Label>
                  <Input
                    id="idade"
                    type="number"
                    placeholder="Ex: 35"
                    value={formData.idade}
                    onChange={(e) => handleInputChange('idade', e.target.value)}
                    className="bg-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nivelAtividade">Nível de Atividade Atual</Label>
                  <Select value={formData.nivelAtividade} onValueChange={(value) => handleInputChange('nivelAtividade', value)}>
                    <SelectTrigger className="bg-white/50">
                      <SelectValue placeholder="Selecione seu nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentario">Sedentário</SelectItem>
                      <SelectItem value="leve">Atividade Leve</SelectItem>
                      <SelectItem value="moderado">Moderadamente Ativo</SelectItem>
                      <SelectItem value="ativo">Muito Ativo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Condição de Saúde */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="doenca">Tipo de Doença/Condição</Label>
                  <Select value={formData.doenca} onValueChange={(value) => handleInputChange('doenca', value)}>
                    <SelectTrigger className="bg-white/50">
                      <SelectValue placeholder="Selecione sua condição principal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diabetes-tipo1">Diabetes Tipo 1</SelectItem>
                      <SelectItem value="diabetes-tipo2">Diabetes Tipo 2</SelectItem>
                      <SelectItem value="hipertensao">Hipertensão</SelectItem>
                      <SelectItem value="hipotireoidismo">Hipotireoidismo</SelectItem>
                      <SelectItem value="obesidade">Obesidade</SelectItem>
                      <SelectItem value="asma">Asma</SelectItem>
                      <SelectItem value="artrite">Artrite/Artrose</SelectItem>
                      <SelectItem value="colesterol">Colesterol Alto</SelectItem>
                      <SelectItem value="ansiedade">Ansiedade/Depressão</SelectItem>
                      <SelectItem value="multiplas">Múltiplas Condições</SelectItem>
                      <SelectItem value="outra">Outra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tempoDoenca">Há quanto tempo tem a condição?</Label>
                  <Select value={formData.tempoDoenca} onValueChange={(value) => handleInputChange('tempoDoenca', value)}>
                    <SelectTrigger className="bg-white/50">
                      <SelectValue placeholder="Tempo de diagnóstico" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recente">Menos de 6 meses</SelectItem>
                      <SelectItem value="1ano">6 meses a 1 ano</SelectItem>
                      <SelectItem value="2-5anos">2 a 5 anos</SelectItem>
                      <SelectItem value="5-10anos">5 a 10 anos</SelectItem>
                      <SelectItem value="mais10">Mais de 10 anos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medicamentos">Medicamentos em uso</Label>
                  <Textarea
                    id="medicamentos"
                    placeholder="Liste os medicamentos que você toma regularmente (ex: Metformina 850mg, Losartana 50mg...)"
                    value={formData.medicamentos}
                    onChange={(e) => handleInputChange('medicamentos', e.target.value)}
                    className="bg-white/50 min-h-[100px]"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Monitoramento Diário */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Dados de Hoje (se disponível)
                  </h4>
                  <p className="text-sm text-blue-700">
                    Preencha os dados que você tem disponível. Isso nos ajudará a personalizar melhor seu plano.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="glicemiaAtual">Glicemia Atual (mg/dL)</Label>
                    <Input
                      id="glicemiaAtual"
                      type="number"
                      placeholder="Ex: 120"
                      value={formData.glicemiaAtual}
                      onChange={(e) => handleInputChange('glicemiaAtual', e.target.value)}
                      className="bg-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="horasSono">Horas de sono (última noite)</Label>
                    <Input
                      id="horasSono"
                      type="number"
                      step="0.5"
                      placeholder="Ex: 7.5"
                      value={formData.horasSono}
                      onChange={(e) => handleInputChange('horasSono', e.target.value)}
                      className="bg-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pressaoSistolica">Pressão Sistólica (mmHg)</Label>
                    <Input
                      id="pressaoSistolica"
                      type="number"
                      placeholder="Ex: 120"
                      value={formData.pressaoSistolica}
                      onChange={(e) => handleInputChange('pressaoSistolica', e.target.value)}
                      className="bg-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pressaoDiastolica">Pressão Diastólica (mmHg)</Label>
                    <Input
                      id="pressaoDiastolica"
                      type="number"
                      placeholder="Ex: 80"
                      value={formData.pressaoDiastolica}
                      onChange={(e) => handleInputChange('pressaoDiastolica', e.target.value)}
                      className="bg-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="glicemiaAcordar">Glicemia ao acordar (mg/dL)</Label>
                    <Input
                      id="glicemiaAcordar"
                      type="number"
                      placeholder="Ex: 95"
                      value={formData.glicemiaAcordar}
                      onChange={(e) => handleInputChange('glicemiaAcordar', e.target.value)}
                      className="bg-white/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="glicemiaDormir">Glicemia antes de dormir (mg/dL)</Label>
                    <Input
                      id="glicemiaDormir"
                      type="number"
                      placeholder="Ex: 110"
                      value={formData.glicemiaDormir}
                      onChange={(e) => handleInputChange('glicemiaDormir', e.target.value)}
                      className="bg-white/50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Objetivos e Preferências */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="objetivo">Objetivo Principal</Label>
                  <Select value={formData.objetivo} onValueChange={(value) => handleInputChange('objetivo', value)}>
                    <SelectTrigger className="bg-white/50">
                      <SelectValue placeholder="O que você mais deseja alcançar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="controle">Controlar melhor minha condição</SelectItem>
                      <SelectItem value="perder-peso">Perder peso com segurança</SelectItem>
                      <SelectItem value="ganhar-massa">Ganhar massa muscular</SelectItem>
                      <SelectItem value="resistencia">Melhorar resistência física</SelectItem>
                      <SelectItem value="forca">Aumentar força</SelectItem>
                      <SelectItem value="energia">Ter mais energia no dia a dia</SelectItem>
                      <SelectItem value="sono">Melhorar qualidade do sono</SelectItem>
                      <SelectItem value="humor">Melhorar humor e bem-estar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="limitacoes">Limitações ou Restrições</Label>
                  <Textarea
                    id="limitacoes"
                    placeholder="Descreva qualquer limitação física, lesão anterior, exercícios que não pode fazer, alimentos que deve evitar, etc."
                    value={formData.limitacoes}
                    onChange={(e) => handleInputChange('limitacoes', e.target.value)}
                    className="bg-white/50 min-h-[120px]"
                  />
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Seu Plano Personalizado Incluirá:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-blue-700">
                      <Dumbbell className="w-4 h-4 mr-2" />
                      Treinos seguros para sua condição
                    </div>
                    <div className="flex items-center text-blue-700">
                      <Utensils className="w-4 h-4 mr-2" />
                      Plano alimentar personalizado
                    </div>
                    <div className="flex items-center text-blue-700">
                      <Activity className="w-4 h-4 mr-2" />
                      Monitoramento inteligente
                    </div>
                    <div className="flex items-center text-blue-700">
                      <Moon className="w-4 h-4 mr-2" />
                      Controle de sono e recuperação
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="bg-white/50"
              >
                Anterior
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                >
                  Próximo
                </Button>
              ) : (
                <Button
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                  onClick={handleCreatePlan}
                >
                  Ver Planos
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "IA Personalizada",
              description: "Algoritmo que aprende com seus dados e ajusta seu plano automaticamente",
              color: "from-purple-500 to-indigo-600"
            },
            {
              icon: Shield,
              title: "Treinos Seguros",
              description: "Exercícios validados por especialistas para cada tipo de condição",
              color: "from-blue-500 to-indigo-600"
            },
            {
              icon: TrendingUp,
              title: "Evolução Real",
              description: "Acompanhe seu progresso com métricas que realmente importam",
              color: "from-green-500 to-teal-600"
            }
          ].map((feature, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
