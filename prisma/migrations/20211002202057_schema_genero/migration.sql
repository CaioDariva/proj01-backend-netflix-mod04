/*
  Warnings:

  - You are about to drop the column `filmeId` on the `Participante` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Participante` DROP FOREIGN KEY `Participante_filmeId_fkey`;

-- AlterTable
ALTER TABLE `Filme` ADD COLUMN `generoId` INTEGER;

-- AlterTable
ALTER TABLE `Participante` DROP COLUMN `filmeId`;

-- CreateTable
CREATE TABLE `Genero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilmeToParticipante` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToParticipante_AB_unique`(`A`, `B`),
    INDEX `_FilmeToParticipante_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Filme` ADD CONSTRAINT `Filme_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `Genero`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipante` ADD FOREIGN KEY (`A`) REFERENCES `Filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToParticipante` ADD FOREIGN KEY (`B`) REFERENCES `Participante`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
