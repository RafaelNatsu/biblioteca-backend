## Migration Flow

Este guia descreve como gerenciar as migrations no projeto, que são usadas para versionar alterações no banco de dados.

### Criando uma Migration

1. Para gerar uma nova migration, execute o seguinte comando:
   ```bash
   npm run migration:generate --name=<nome_da_migration>
   ```
   - Substitua `<nome_da_migration>` por um nome descritivo, como `add_birthday`.
   - Este comando cria um arquivo de migration com base nas alterações detectadas no seu modelo de dados.

2. Para aplicar a migration recém-criada ao banco de dados, execute:
   ```bash
   npm run migration:run
   ```
   - Isso executará todas as migrations pendentes.

3. Para verificar as migrations aplicadas e as pendentes, use:
   ```bash
   npm run migration:show
   ```
   - Este comando lista todas as migrations no sistema, indicando quais já foram executadas.

### Exemplo Prático

Aqui está um exemplo de como adicionar uma nova coluna ao banco de dados:

1. Atualize o modelo para incluir a nova coluna, como:
   ```typescript
   @Entity()
   export class User {
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       name: string;

       @Column({ nullable: true })
       birthday: Date; // Nova coluna
   }
   ```

2. Gere uma migration:
   ```bash
   npm run migration:generate --name=add_birthday
   ```

3. Execute a migration para aplicar as mudanças:
   ```bash
   npm run migration:run
   ```

4. Confirme se a migration foi aplicada:
   ```bash
   npm run migration:show
   ```

### Solução de Problemas

- **Erro: "Syntax error in SQL statement"**
  - Verifique se o modelo está configurado corretamente e se não há conflitos entre o estado atual do banco de dados e o modelo.

- **Rollback de migrations**
  - Para reverter a última migration aplicada:
    ```bash
    npm run migration:revert
    ```

### Boas Práticas

- Use nomes descritivos para migrations, como `add_user_birthday`.
- Sempre teste migrations em um ambiente local antes de aplicá-las no ambiente de produção.
- Mantenha um backup do banco de dados antes de executar migrations críticas.
