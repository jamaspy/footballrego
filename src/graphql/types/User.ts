import {
  FieldResolver,
  enumType,
  extendType,
  inputObjectType,
  nonNull,
  objectType,
  stringArg,
} from "nexus";

const Role = enumType({
  name: "Role",
  members: ["ADMIN", "USER"],
});
export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("firstName");
    t.string("lastName");
    t.string("dateOfBirth");
    t.string("phone");
    t.string("email");
    t.string("address");
    t.string("preferredPosition");
    t.string("emergencyContactName");
    t.string("emergencyContactPhone");
    t.string("emergencyContactRelationship");
    t.string("image");
    t.field("role", {
      type: Role,
    });
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: User,
      async resolve(parent, args, ctx) {
        return await ctx.prisma.user.findMany();
      },
    });
  },
});

export const CreateUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: CreateUserResponse,
      args: { user: CreateUserInput },
      resolve: CreateUserResolver,
    });
  },
});
const CreateUserResponse = objectType({
  name: "CreateUserResponse",
  definition(t) {
    t.nonNull.string("message");
    t.nonNull.boolean("error");
  },
});
const CreateUserResolver: FieldResolver<"Mutation", "CreateUserInput"> = async (
  parent,
  args,
  ctx
) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    phone,
    email,
    address,
    preferredPosition,
    emergencyContactName,
    emergencyContactPhone,
    emergencyContactRelationship,
    image,
    role,
  } = args.user;
  try {
    const user = await ctx.prisma.user.create({
      data: {
        firstName,
        lastName,
        dateOfBirth,
        phone,
        email,
        address,
        preferredPosition,
        emergencyContactName,
        emergencyContactPhone,
        emergencyContactRelationship,
        image,
        role,
      },
    });
    return {
      message: "Successfully created user!!",
      error: false,
    };
  } catch (error) {
    return {
      message: "Error creating user!!",
      error: true,
    };
  }
};
const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("dateOfBirth");
    t.nonNull.string("phone");
    t.nonNull.string("email");
    t.nonNull.string("address");
    t.nonNull.string("preferredPosition");
    t.nonNull.string("emergencyContactName");
    t.nonNull.string("emergencyContactPhone");
    t.nonNull.string("emergencyContactRelationship");
    t.nonNull.string("image");
    t.nonNull.field("role", {
      type: Role,
    });
  },
});
