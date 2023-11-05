export default {
  clearMocks: true,
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest.mock.ts",
    "^next/image$": "<rootDir>/src/tests/mocks/next-image.tsx",
    "@/components/(.*)": "<rootDir>/src/components/$1",
    "@/styles/(.*)": "<rootDir>/src/styles/$1",
    "@/sections/(.*)": "<rootDir>/src/sections/$1",
    "@/assets/(.*)": "<rootDir>/src/assets/$1",
  },
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "jest-canvas-mock"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
};
