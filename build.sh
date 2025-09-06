#!/bin/bash

echo "Iniciando build do SuperAgente..."

# Ativar venv
source venv/bin/activate

# Instalar dependencias
echo "Instalando dependencias..."
pip install -r requirements.txt

# Validar dependencias criticas
echo "Validando dependencias criticas..."
python -c "import meu_super_agente; print('meu_super_agente OK')"
python -c "import pyinstaller; print('PyInstaller OK')"

# Limpar dist anterior
echo "Limpando build anterior..."
rm -rf dist build *.spec

# Verificar se meu_super_agente existe
if [ ! -d "meu_super_agente" ]; then
    echo "Erro: Pasta meu_super_agente nao encontrada!"
    exit 1
fi

# Iniciar compilacao
echo "Iniciando compilacao..."
pyinstaller --noconfirm --onefile --windowed --name "SuperAgente" --add-data "meu_super_agente:meu_super_agente" --add-data "config.json.example:." --add-data "BUILD_INSTRUCTIONS.md:." --optimize=2 --strip --exclude-module easyocr --exclude-module torch --exclude-module torchvision --exclude-module whisper --exclude-module matplotlib --exclude-module pandas --collect-submodules meu_super_agente --collect-data meu_super_agente --log-level WARN run.py

# Verificar se o executavel foi criado
if [ -f "dist/SuperAgente" ]; then
    echo "Build concluido com sucesso!"
    echo "Executavel criado: dist/SuperAgente"
    ls -lh dist/
else
    echo "Erro: Build falhou!"
    exit 1
fi

echo "Build finalizado."
