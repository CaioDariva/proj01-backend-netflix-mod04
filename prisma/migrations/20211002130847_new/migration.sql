/*
  Warnings:

  - You are about to drop the `Genero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Participante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FilmeToParticipante` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Genero` DROP FOREIGN KEY `Genero_filmeId_fkey`;

-- DropForeignKey
ALTER TABLE `_FilmeToParticipante` DROP FOREIGN KEY `_FilmeToParticipante_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_FilmeToParticipante` DROP FOREIGN KEY `_FilmeToParticipante_ibfk_2`;

-- DropTable
DROP TABLE `Genero`;

-- DropTable
DROP TABLE `Participante`;

-- DropTable
DROP TABLE `_FilmeToParticipante`;
