-- CreateTable
CREATE TABLE "Alunno" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Alunno_pkey" PRIMARY KEY ("id")
);
