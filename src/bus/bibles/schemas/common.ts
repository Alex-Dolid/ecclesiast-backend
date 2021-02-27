// Types
import { JSONSchemaType } from "ajv";
import { BibleType } from "../bibles.odm";

export const common: JSONSchemaType<BibleType & { locale: string }> = {
  type: "object",
  properties: {
    _id: {
      type: "string",
      nullable: true
    },
    name: {
      type: "string",
      minLength: 3
    },
    author: {
      type: "string",
      minLength: 3
    },
    edition: {
      type: "string",
      minLength: 3,
      nullable: true
    },
    translators: {
      type: "array",
      items: {
        type: "string"
      },
      nullable: true
    },
    src: {
      type: "string",
      nullable: true
    },
    books: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            minLength: 3
          },
          chapters: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "number",
                  minimum: 1
                },
                verses: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: {
                        type: "number",
                        minimum: 1
                      },
                      text: {
                        type: "string",
                        minLength: 3
                      }
                    },
                    additionalProperties: false,
                    required: [ "name", "text" ]
                  }
                }
              },
              additionalProperties: false,
              required: [ "name", "verses" ]
            }
          }
        },
        additionalProperties: false,
        required: [ "name", "chapters" ]
      }
    },
    locale: {
      type: "string",
      minLength: 2
    }
  },
  additionalProperties: false,
  required: []
};
