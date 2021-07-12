import {
  connectToTestDatabase,
  disconnectToTestDatabase,
  mockTestDatabase,
  restoreTestDatabase,
} from "./mock-test-database";
import {
  closeIntegrationTestServer,
  initializeIntegrationTestServer,
} from "./mock-test-server";

beforeAll(async () => {
  await connectToTestDatabase();
  await initializeIntegrationTestServer();
});

beforeEach(mockTestDatabase);

afterEach(restoreTestDatabase);

afterAll(async () => {
  await disconnectToTestDatabase();
  await closeIntegrationTestServer();
});
