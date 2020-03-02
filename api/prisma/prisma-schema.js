module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateRecipe {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Category {
  BREAKFAST
  SALAD
  SOUP
  MAIN
  DESSERT
}

type Comment {
  id: ID!
  author: User!
  content: String!
}

input CommentCreateInput {
  id: ID!
  author: UserCreateOneInput!
  content: String!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
}

input CommentRestrictedWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentRestrictedWhereInput!]
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

input CommentUpdateManyDataInput {
  id: ID
  content: String
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [CommentWhereInput!]
}

scalar DateTime

enum Difficulty {
  EASY
  INTERMEDIATE
  HARD
}

type Grade {
  id: ID!
  rater: User!
  grade: Int!
}

input GradeCreateInput {
  id: ID!
  rater: UserCreateOneInput!
  grade: Int!
}

input GradeCreateManyInput {
  create: [GradeCreateInput!]
}

input GradeRestrictedWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  grade: Int
  grade_not: Int
  grade_in: [Int!]
  grade_not_in: [Int!]
  grade_lt: Int
  grade_lte: Int
  grade_gt: Int
  grade_gte: Int
  AND: [GradeRestrictedWhereInput!]
}

input GradeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  grade: Int
  grade_not: Int
  grade_in: [Int!]
  grade_not_in: [Int!]
  grade_lt: Int
  grade_lte: Int
  grade_gt: Int
  grade_gte: Int
  AND: [GradeScalarWhereInput!]
  OR: [GradeScalarWhereInput!]
  NOT: [GradeScalarWhereInput!]
}

input GradeUpdateManyDataInput {
  id: ID
  grade: Int
}

input GradeUpdateManyInput {
  create: [GradeCreateInput!]
  deleteMany: [GradeScalarWhereInput!]
  updateMany: [GradeUpdateManyWithWhereNestedInput!]
}

input GradeUpdateManyWithWhereNestedInput {
  where: GradeScalarWhereInput!
  data: GradeUpdateManyDataInput!
}

input GradeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  rater: UserWhereInput
  grade: Int
  grade_not: Int
  grade_in: [Int!]
  grade_not_in: [Int!]
  grade_lt: Int
  grade_lte: Int
  grade_gt: Int
  grade_gte: Int
  AND: [GradeWhereInput!]
}

scalar Long

type Mutation {
  createRecipe(data: RecipeCreateInput!): Recipe!
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateManyRecipes(data: RecipeUpdateManyMutationInput!, where: RecipeWhereInput): BatchPayload!
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  recipe(where: RecipeWhereUniqueInput!): Recipe
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Recipe {
  id: ID!
  author: User!
  category: Category!
  title: String!
  description: String!
  cookingTime: Int!
  difficulty: Difficulty!
  ingredients: [String!]!
  method: [String!]!
  notes: [String!]!
  tags: [String!]!
  source: String
  created: DateTime!
  updated: DateTime!
  published: Boolean!
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  comments: [Comment!]
  ratings: [Grade!]
}

type RecipeConnection {
  pageInfo: PageInfo!
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreateingredientsInput {
  set: [String!]
}

input RecipeCreateInput {
  id: ID
  author: UserCreateOneWithoutRecipesInput!
  category: Category!
  title: String!
  description: String!
  cookingTime: Int!
  difficulty: Difficulty!
  ingredients: RecipeCreateingredientsInput
  method: RecipeCreatemethodInput
  notes: RecipeCreatenotesInput
  tags: RecipeCreatetagsInput
  source: String
  published: Boolean
  likedBy: UserCreateManyWithoutLikedRecipesInput
  comments: CommentCreateManyInput
  ratings: GradeCreateManyInput
}

input RecipeCreateManyWithoutAuthorInput {
  create: [RecipeCreateWithoutAuthorInput!]
  connect: [RecipeWhereUniqueInput!]
}

input RecipeCreateManyWithoutLikedByInput {
  create: [RecipeCreateWithoutLikedByInput!]
  connect: [RecipeWhereUniqueInput!]
}

input RecipeCreatemethodInput {
  set: [String!]
}

input RecipeCreatenotesInput {
  set: [String!]
}

input RecipeCreatetagsInput {
  set: [String!]
}

input RecipeCreateWithoutAuthorInput {
  id: ID
  category: Category!
  title: String!
  description: String!
  cookingTime: Int!
  difficulty: Difficulty!
  ingredients: RecipeCreateingredientsInput
  method: RecipeCreatemethodInput
  notes: RecipeCreatenotesInput
  tags: RecipeCreatetagsInput
  source: String
  published: Boolean
  likedBy: UserCreateManyWithoutLikedRecipesInput
  comments: CommentCreateManyInput
  ratings: GradeCreateManyInput
}

input RecipeCreateWithoutLikedByInput {
  id: ID
  author: UserCreateOneWithoutRecipesInput!
  category: Category!
  title: String!
  description: String!
  cookingTime: Int!
  difficulty: Difficulty!
  ingredients: RecipeCreateingredientsInput
  method: RecipeCreatemethodInput
  notes: RecipeCreatenotesInput
  tags: RecipeCreatetagsInput
  source: String
  published: Boolean
  comments: CommentCreateManyInput
  ratings: GradeCreateManyInput
}

type RecipeEdge {
  node: Recipe!
  cursor: String!
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  category_ASC
  category_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  cookingTime_ASC
  cookingTime_DESC
  difficulty_ASC
  difficulty_DESC
  source_ASC
  source_DESC
  created_ASC
  created_DESC
  updated_ASC
  updated_DESC
  published_ASC
  published_DESC
}

type RecipePreviousValues {
  id: ID!
  category: Category!
  title: String!
  description: String!
  cookingTime: Int!
  difficulty: Difficulty!
  ingredients: [String!]!
  method: [String!]!
  notes: [String!]!
  tags: [String!]!
  source: String
  created: DateTime!
  updated: DateTime!
  published: Boolean!
}

input RecipeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  category: Category
  category_not: Category
  category_in: [Category!]
  category_not_in: [Category!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  cookingTime: Int
  cookingTime_not: Int
  cookingTime_in: [Int!]
  cookingTime_not_in: [Int!]
  cookingTime_lt: Int
  cookingTime_lte: Int
  cookingTime_gt: Int
  cookingTime_gte: Int
  difficulty: Difficulty
  difficulty_not: Difficulty
  difficulty_in: [Difficulty!]
  difficulty_not_in: [Difficulty!]
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  published: Boolean
  published_not: Boolean
  AND: [RecipeScalarWhereInput!]
  OR: [RecipeScalarWhereInput!]
  NOT: [RecipeScalarWhereInput!]
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
  AND: [RecipeSubscriptionWhereInput!]
}

input RecipeUpdateingredientsInput {
  set: [String!]
}

input RecipeUpdateInput {
  author: UserUpdateOneRequiredWithoutRecipesInput
  category: Category
  title: String
  description: String
  cookingTime: Int
  difficulty: Difficulty
  ingredients: RecipeUpdateingredientsInput
  method: RecipeUpdatemethodInput
  notes: RecipeUpdatenotesInput
  tags: RecipeUpdatetagsInput
  source: String
  published: Boolean
  likedBy: UserUpdateManyWithoutLikedRecipesInput
  comments: CommentUpdateManyInput
  ratings: GradeUpdateManyInput
}

input RecipeUpdateManyDataInput {
  category: Category
  title: String
  description: String
  cookingTime: Int
  difficulty: Difficulty
  ingredients: RecipeUpdateingredientsInput
  method: RecipeUpdatemethodInput
  notes: RecipeUpdatenotesInput
  tags: RecipeUpdatetagsInput
  source: String
  published: Boolean
}

input RecipeUpdateManyMutationInput {
  category: Category
  title: String
  description: String
  cookingTime: Int
  difficulty: Difficulty
  ingredients: RecipeUpdateingredientsInput
  method: RecipeUpdatemethodInput
  notes: RecipeUpdatenotesInput
  tags: RecipeUpdatetagsInput
  source: String
  published: Boolean
}

input RecipeUpdateManyWithoutAuthorInput {
  create: [RecipeCreateWithoutAuthorInput!]
  delete: [RecipeWhereUniqueInput!]
  connect: [RecipeWhereUniqueInput!]
  set: [RecipeWhereUniqueInput!]
  disconnect: [RecipeWhereUniqueInput!]
  update: [RecipeUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [RecipeUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [RecipeScalarWhereInput!]
  updateMany: [RecipeUpdateManyWithWhereNestedInput!]
}

input RecipeUpdateManyWithoutLikedByInput {
  create: [RecipeCreateWithoutLikedByInput!]
  delete: [RecipeWhereUniqueInput!]
  connect: [RecipeWhereUniqueInput!]
  set: [RecipeWhereUniqueInput!]
  disconnect: [RecipeWhereUniqueInput!]
  update: [RecipeUpdateWithWhereUniqueWithoutLikedByInput!]
  upsert: [RecipeUpsertWithWhereUniqueWithoutLikedByInput!]
  deleteMany: [RecipeScalarWhereInput!]
  updateMany: [RecipeUpdateManyWithWhereNestedInput!]
}

input RecipeUpdateManyWithWhereNestedInput {
  where: RecipeScalarWhereInput!
  data: RecipeUpdateManyDataInput!
}

input RecipeUpdatemethodInput {
  set: [String!]
}

input RecipeUpdatenotesInput {
  set: [String!]
}

input RecipeUpdatetagsInput {
  set: [String!]
}

input RecipeUpdateWithoutAuthorDataInput {
  category: Category
  title: String
  description: String
  cookingTime: Int
  difficulty: Difficulty
  ingredients: RecipeUpdateingredientsInput
  method: RecipeUpdatemethodInput
  notes: RecipeUpdatenotesInput
  tags: RecipeUpdatetagsInput
  source: String
  published: Boolean
  likedBy: UserUpdateManyWithoutLikedRecipesInput
  comments: CommentUpdateManyInput
  ratings: GradeUpdateManyInput
}

input RecipeUpdateWithoutLikedByDataInput {
  author: UserUpdateOneRequiredWithoutRecipesInput
  category: Category
  title: String
  description: String
  cookingTime: Int
  difficulty: Difficulty
  ingredients: RecipeUpdateingredientsInput
  method: RecipeUpdatemethodInput
  notes: RecipeUpdatenotesInput
  tags: RecipeUpdatetagsInput
  source: String
  published: Boolean
  comments: CommentUpdateManyInput
  ratings: GradeUpdateManyInput
}

input RecipeUpdateWithWhereUniqueWithoutAuthorInput {
  where: RecipeWhereUniqueInput!
  data: RecipeUpdateWithoutAuthorDataInput!
}

input RecipeUpdateWithWhereUniqueWithoutLikedByInput {
  where: RecipeWhereUniqueInput!
  data: RecipeUpdateWithoutLikedByDataInput!
}

input RecipeUpsertWithWhereUniqueWithoutAuthorInput {
  where: RecipeWhereUniqueInput!
  update: RecipeUpdateWithoutAuthorDataInput!
  create: RecipeCreateWithoutAuthorInput!
}

input RecipeUpsertWithWhereUniqueWithoutLikedByInput {
  where: RecipeWhereUniqueInput!
  update: RecipeUpdateWithoutLikedByDataInput!
  create: RecipeCreateWithoutLikedByInput!
}

input RecipeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  category: Category
  category_not: Category
  category_in: [Category!]
  category_not_in: [Category!]
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  cookingTime: Int
  cookingTime_not: Int
  cookingTime_in: [Int!]
  cookingTime_not_in: [Int!]
  cookingTime_lt: Int
  cookingTime_lte: Int
  cookingTime_gt: Int
  cookingTime_gte: Int
  difficulty: Difficulty
  difficulty_not: Difficulty
  difficulty_in: [Difficulty!]
  difficulty_not_in: [Difficulty!]
  source: String
  source_not: String
  source_in: [String!]
  source_not_in: [String!]
  source_lt: String
  source_lte: String
  source_gt: String
  source_gte: String
  source_contains: String
  source_not_contains: String
  source_starts_with: String
  source_not_starts_with: String
  source_ends_with: String
  source_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  updated: DateTime
  updated_not: DateTime
  updated_in: [DateTime!]
  updated_not_in: [DateTime!]
  updated_lt: DateTime
  updated_lte: DateTime
  updated_gt: DateTime
  updated_gte: DateTime
  published: Boolean
  published_not: Boolean
  likedBy_some: UserWhereInput
  comments_some: CommentWhereInput
  comments_every: CommentRestrictedWhereInput
  comments_none: CommentRestrictedWhereInput
  ratings_some: GradeWhereInput
  ratings_every: GradeRestrictedWhereInput
  ratings_none: GradeRestrictedWhereInput
  AND: [RecipeWhereInput!]
}

input RecipeWhereUniqueInput {
  id: ID
}

enum Role {
  ADMIN
  MODERATOR
  USER
}

type Subscription {
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  passwordHash: String!
  role: Role!
  registered: DateTime!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
  likedRecipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
  followees(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  passwordHash: String!
  role: Role
  recipes: RecipeCreateManyWithoutAuthorInput
  likedRecipes: RecipeCreateManyWithoutLikedByInput
  followees: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFolloweesInput
}

input UserCreateManyWithoutFolloweesInput {
  create: [UserCreateWithoutFolloweesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutLikedRecipesInput {
  create: [UserCreateWithoutLikedRecipesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFolloweesInput {
  id: ID
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  passwordHash: String!
  role: Role
  recipes: RecipeCreateManyWithoutAuthorInput
  likedRecipes: RecipeCreateManyWithoutLikedByInput
  followers: UserCreateManyWithoutFolloweesInput
}

input UserCreateWithoutFollowersInput {
  id: ID
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  passwordHash: String!
  role: Role
  recipes: RecipeCreateManyWithoutAuthorInput
  likedRecipes: RecipeCreateManyWithoutLikedByInput
  followees: UserCreateManyWithoutFollowersInput
}

input UserCreateWithoutLikedRecipesInput {
  id: ID
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  passwordHash: String!
  role: Role
  recipes: RecipeCreateManyWithoutAuthorInput
  followees: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFolloweesInput
}

input UserCreateWithoutRecipesInput {
  id: ID
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  passwordHash: String!
  role: Role
  likedRecipes: RecipeCreateManyWithoutLikedByInput
  followees: UserCreateManyWithoutFollowersInput
  followers: UserCreateManyWithoutFolloweesInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  firstname_ASC
  firstname_DESC
  lastname_ASC
  lastname_DESC
  passwordHash_ASC
  passwordHash_DESC
  role_ASC
  role_DESC
  registered_ASC
  registered_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  firstname: String!
  lastname: String!
  passwordHash: String!
  role: Role!
  registered: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  passwordHash: String
  passwordHash_not: String
  passwordHash_in: [String!]
  passwordHash_not_in: [String!]
  passwordHash_lt: String
  passwordHash_lte: String
  passwordHash_gt: String
  passwordHash_gte: String
  passwordHash_contains: String
  passwordHash_not_contains: String
  passwordHash_starts_with: String
  passwordHash_not_starts_with: String
  passwordHash_ends_with: String
  passwordHash_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  registered: DateTime
  registered_not: DateTime
  registered_in: [DateTime!]
  registered_not_in: [DateTime!]
  registered_lt: DateTime
  registered_lte: DateTime
  registered_gt: DateTime
  registered_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  firstname: String
  lastname: String
  passwordHash: String
  role: Role
  recipes: RecipeUpdateManyWithoutAuthorInput
  likedRecipes: RecipeUpdateManyWithoutLikedByInput
  followees: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFolloweesInput
}

input UserUpdateManyDataInput {
  username: String
  email: String
  firstname: String
  lastname: String
  passwordHash: String
  role: Role
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  firstname: String
  lastname: String
  passwordHash: String
  role: Role
}

input UserUpdateManyWithoutFolloweesInput {
  create: [UserCreateWithoutFolloweesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFolloweesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFolloweesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutFollowersInput {
  create: [UserCreateWithoutFollowersInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowersInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowersInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithoutLikedRecipesInput {
  create: [UserCreateWithoutLikedRecipesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikedRecipesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikedRecipesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  update: UserUpdateWithoutRecipesDataInput
  upsert: UserUpsertWithoutRecipesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFolloweesDataInput {
  username: String
  email: String
  firstname: String
  lastname: String
  passwordHash: String
  role: Role
  recipes: RecipeUpdateManyWithoutAuthorInput
  likedRecipes: RecipeUpdateManyWithoutLikedByInput
  followers: UserUpdateManyWithoutFolloweesInput
}

input UserUpdateWithoutFollowersDataInput {
  username: String
  email: String
  firstname: String
  lastname: String
  passwordHash: String
  role: Role
  recipes: RecipeUpdateManyWithoutAuthorInput
  likedRecipes: RecipeUpdateManyWithoutLikedByInput
  followees: UserUpdateManyWithoutFollowersInput
}

input UserUpdateWithoutLikedRecipesDataInput {
  username: String
  email: String
  firstname: String
  lastname: String
  passwordHash: String
  role: Role
  recipes: RecipeUpdateManyWithoutAuthorInput
  followees: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFolloweesInput
}

input UserUpdateWithoutRecipesDataInput {
  username: String
  email: String
  firstname: String
  lastname: String
  passwordHash: String
  role: Role
  likedRecipes: RecipeUpdateManyWithoutLikedByInput
  followees: UserUpdateManyWithoutFollowersInput
  followers: UserUpdateManyWithoutFolloweesInput
}

input UserUpdateWithWhereUniqueWithoutFolloweesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFolloweesDataInput!
}

input UserUpdateWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowersDataInput!
}

input UserUpdateWithWhereUniqueWithoutLikedRecipesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikedRecipesDataInput!
}

input UserUpsertWithoutRecipesInput {
  update: UserUpdateWithoutRecipesDataInput!
  create: UserCreateWithoutRecipesInput!
}

input UserUpsertWithWhereUniqueWithoutFolloweesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFolloweesDataInput!
  create: UserCreateWithoutFolloweesInput!
}

input UserUpsertWithWhereUniqueWithoutFollowersInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowersDataInput!
  create: UserCreateWithoutFollowersInput!
}

input UserUpsertWithWhereUniqueWithoutLikedRecipesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikedRecipesDataInput!
  create: UserCreateWithoutLikedRecipesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  firstname: String
  firstname_not: String
  firstname_in: [String!]
  firstname_not_in: [String!]
  firstname_lt: String
  firstname_lte: String
  firstname_gt: String
  firstname_gte: String
  firstname_contains: String
  firstname_not_contains: String
  firstname_starts_with: String
  firstname_not_starts_with: String
  firstname_ends_with: String
  firstname_not_ends_with: String
  lastname: String
  lastname_not: String
  lastname_in: [String!]
  lastname_not_in: [String!]
  lastname_lt: String
  lastname_lte: String
  lastname_gt: String
  lastname_gte: String
  lastname_contains: String
  lastname_not_contains: String
  lastname_starts_with: String
  lastname_not_starts_with: String
  lastname_ends_with: String
  lastname_not_ends_with: String
  passwordHash: String
  passwordHash_not: String
  passwordHash_in: [String!]
  passwordHash_not_in: [String!]
  passwordHash_lt: String
  passwordHash_lte: String
  passwordHash_gt: String
  passwordHash_gte: String
  passwordHash_contains: String
  passwordHash_not_contains: String
  passwordHash_starts_with: String
  passwordHash_not_starts_with: String
  passwordHash_ends_with: String
  passwordHash_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  registered: DateTime
  registered_not: DateTime
  registered_in: [DateTime!]
  registered_not_in: [DateTime!]
  registered_lt: DateTime
  registered_lte: DateTime
  registered_gt: DateTime
  registered_gte: DateTime
  recipes_some: RecipeWhereInput
  likedRecipes_some: RecipeWhereInput
  followees_some: UserWhereInput
  followers_some: UserWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`
      }
    