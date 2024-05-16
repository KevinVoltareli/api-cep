-- CreateTable
CREATE TABLE "end" (
    "id" SERIAL NOT NULL,
    "cep" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "localidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "ibge" TEXT NOT NULL,
    "gia" TEXT NOT NULL,
    "ddd" TEXT NOT NULL,
    "siafi" TEXT NOT NULL,

    CONSTRAINT "end_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "end_cep_key" ON "end"("cep");
