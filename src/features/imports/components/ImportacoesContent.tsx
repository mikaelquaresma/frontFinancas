"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "@/stores/ThemeContext";
import { useLoadingContext } from "@/stores/LoadingContext";
import { 
  FileSpreadsheet, 
  FileText, 
  Users, 
  Download,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";

export default function ImportacoesContent() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { startLoading, updateProgress, finishLoading } = useLoadingContext();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const importOptions = [
    {
      id: "padrao",
      title: t("importacoes.padrao.titulo"),
      description: t("importacoes.padrao.descricao"),
      icon: <div className="w-8 h-8 flex items-center justify-center"><FileSpreadsheet className="h-8 w-8 text-green-600" /></div>,
      color: "green"
    },
    {
      id: "zeropaper", 
      title: t("importacoes.zeropaper.titulo"),
      description: t("importacoes.zeropaper.descricao"),
      icon: <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">ZP</div>,
      color: "green"
    },
    {
      id: "contatos",
      title: t("importacoes.contatos.titulo"), 
      description: t("importacoes.contatos.descricao"),
      icon: <div className="w-8 h-8 flex items-center justify-center"><Users className="h-8 w-8 text-gray-600" /></div>,
      color: "gray"
    },
    {
      id: "ofx",
      title: t("importacoes.ofx.titulo"),
      description: t("importacoes.ofx.descricao"),
      icon: <div className="w-8 h-8 flex items-center justify-center"><FileText className="h-8 w-8 text-gray-600" /></div>,
      color: "gray"
    }
  ];

  const importedTransactions = [
    {
      fileName: "transacoes_janeiro.xlsx",
      status: "concluido",
      origin: "Zero Paper",
      transactions: 156,
      importedAt: "2025-01-15 14:30"
    },
    {
      fileName: "contatos_clientes.csv", 
      status: "processando",
      origin: "Excel",
      transactions: 89,
      importedAt: "2025-01-15 13:45"
    },
    {
      fileName: "extrato_banco.ofx",
      status: "erro", 
      origin: "OFX",
      transactions: 0,
      importedAt: "2025-01-15 12:20"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "concluido":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="h-3 w-3 mr-1" />{t("importacoes.status.concluido")}</Badge>;
      case "processando":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="h-3 w-3 mr-1" />{t("importacoes.status.processando")}</Badge>;
      case "erro":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100"><AlertCircle className="h-3 w-3 mr-1" />{t("importacoes.status.erro")}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const validateFile = (file: File): boolean => {
    const allowedTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
      'application/vnd.ms-excel', // .xls
      'text/csv', // .csv
      'application/x-ofx' // .ofx
    ];
    
    const allowedExtensions = ['.xlsx', '.xls', '.csv', '.ofx'];
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    
    return allowedTypes.includes(file.type) || allowedExtensions.includes(fileExtension);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
    } else if (file) {
      alert('Tipo de arquivo não suportado. Use apenas .xlsx, .xls, .csv ou .ofx');
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      } else {
        alert('Tipo de arquivo não suportado. Use apenas .xlsx, .xls, .csv ou .ofx');
      }
    }
  };

  const handleImport = async (type: string) => {
    if (!selectedFile) {
      alert('Selecione um arquivo primeiro');
      return;
    }

    setIsUploading(true);
    startLoading(`Importando ${selectedFile.name}...`);
    
    try {
      // Simular etapas do upload/processamento
      updateProgress(10, 'Validando arquivo...');
      await new Promise(resolve => setTimeout(resolve, 500));
      
      updateProgress(30, 'Enviando arquivo...');
      await new Promise(resolve => setTimeout(resolve, 800));
      
      updateProgress(60, 'Processando dados...');
      await new Promise(resolve => setTimeout(resolve, 700));
      
      updateProgress(90, 'Finalizando importação...');
      await new Promise(resolve => setTimeout(resolve, 400));
      
      console.log(`Importing ${type} with file:`, selectedFile.name);
      
      // Aqui seria implementada a lógica real de importação
      // Exemplo de como seria:
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // formData.append('type', type);
      // const response = await fetch('/api/import', {
      //   method: 'POST',
      //   body: formData
      // });
      
      updateProgress(100, 'Importação concluída!');
      await new Promise(resolve => setTimeout(resolve, 300));
      finishLoading();
      
      alert(`Arquivo ${selectedFile.name} importado com sucesso!`);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
    } catch (error) {
      console.error('Erro na importação:', error);
      finishLoading();
      alert('Erro ao importar arquivo. Tente novamente.');
    } finally {
      setIsUploading(false);
    }
  };


  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Import Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {importOptions.map((option) => (
          <Card key={option.id} className={`hover:shadow-lg transition-shadow cursor-pointer border-2 ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:border-primary-custom/50' : 'bg-white border-gray-200 hover:border-primary-custom/50'
          }`}>
            <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-6 pt-4 sm:pt-6">
              <div className="flex justify-center mb-2 sm:mb-3">
                {option.icon}
              </div>
              <CardTitle className={`text-base sm:text-lg lg:text-xl leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {option.title}
              </CardTitle>
              <CardDescription className={`text-xs sm:text-sm lg:text-base leading-tight px-1 sm:px-0 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {option.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 sm:px-6 pb-4 sm:pb-6">
              <Button 
                onClick={() => handleImport(option.id)}
                className="w-full bg-primary-custom hover:bg-primary-custom/90 text-white text-xs sm:text-sm lg:text-base py-2 sm:py-2.5"
                disabled={!selectedFile || isUploading}
              >
                {isUploading ? t("comum.carregando") : t("importacoes.botao.importar")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* File Upload Section */}
      <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <CardHeader className="px-3 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <CardTitle className={`text-base sm:text-lg lg:text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t("importacoes.arquivo.titulo")}
          </CardTitle>
          <CardDescription className={`text-xs sm:text-sm lg:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t("importacoes.arquivo.descricao")}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-6 pb-4 sm:pb-6">
          <div 
            className={`border-2 border-dashed rounded-lg p-4 sm:p-6 lg:p-8 text-center transition-colors ${
              isDragOver
                ? theme === 'dark' 
                  ? 'border-primary-custom bg-primary-custom/10' 
                  : 'border-primary-custom bg-primary-custom/5'
                : theme === 'dark' 
                  ? 'border-gray-600 bg-gray-700/50' 
                  : 'border-gray-300 bg-gray-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className={`mx-auto h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-3 sm:mb-4 ${
              isDragOver
                ? 'text-primary-custom'
                : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <p className={`text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2 px-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t("importacoes.arquivo.arrastar")}
            </p>
            <p className={`text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 px-2 ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              {t("importacoes.arquivo.clicar")}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls,.csv,.ofx"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button 
                variant="outline" 
                className="cursor-pointer text-xs sm:text-sm lg:text-base px-3 sm:px-4 py-2 sm:py-2.5" 
                disabled={isUploading}
              >
                {t("importacoes.arquivo.selecionar")}
              </Button>
            </label>
            {selectedFile && (
              <div className={`mt-3 sm:mt-4 p-3 rounded-md ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <p className={`text-xs sm:text-sm font-medium break-all ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t("importacoes.arquivo.selecionado")} {selectedFile.name}
                </p>
                <p className={`text-xs mt-1 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  Tamanho: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 text-red-600 hover:text-red-700 text-xs sm:text-sm px-2 py-1"
                  onClick={() => {
                    setSelectedFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                >
                  Remover arquivo
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Imported Transactions Table */}
      <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <CardHeader className="px-3 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <CardTitle className={`text-base sm:text-lg lg:text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t("importacoes.historico.titulo")}
          </CardTitle>
          <CardDescription className={`text-xs sm:text-sm lg:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t("importacoes.historico.descricao")}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-3 sm:px-6 pb-4 sm:pb-6">
          {/* Mobile View - Cards */}
          <div className="block lg:hidden space-y-3">
            {importedTransactions.map((transaction, index) => (
              <div key={index} className={`border rounded-lg p-3 sm:p-4 ${
                theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50/50'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div className="mb-2 sm:mb-0">
                    <p className={`font-medium text-sm break-all ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {transaction.fileName}
                    </p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                      {transaction.origin}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(transaction.status)}
                    <Button variant="ghost" size="sm" className="p-1">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {transaction.transactions} transações
                  </span>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {transaction.importedAt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden lg:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className={theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}>
                  <TableHead className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t("importacoes.tabela.arquivo")}
                  </TableHead>
                  <TableHead className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t("importacoes.tabela.situacao")}
                  </TableHead>
                  <TableHead className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t("importacoes.tabela.origem")}
                  </TableHead>
                  <TableHead className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t("importacoes.tabela.transacoes")}
                  </TableHead>
                  <TableHead className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t("importacoes.tabela.data")}
                  </TableHead>
                  <TableHead className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t("importacoes.tabela.acoes")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {importedTransactions.map((transaction, index) => (
                  <TableRow key={index} className={theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}>
                    <TableCell className={`font-medium text-xs xl:text-sm max-w-48 truncate ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>
                      {transaction.fileName}
                    </TableCell>
                    <TableCell className="text-xs xl:text-sm">
                      {getStatusBadge(transaction.status)}
                    </TableCell>
                    <TableCell className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {transaction.origin}
                    </TableCell>
                    <TableCell className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {transaction.transactions}
                    </TableCell>
                    <TableCell className={`text-xs xl:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {transaction.importedAt}
                    </TableCell>
                    <TableCell className="text-xs xl:text-sm">
                      <Button variant="ghost" size="sm" className="p-1">
                        <Download className="h-3 w-3 xl:h-4 xl:w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}