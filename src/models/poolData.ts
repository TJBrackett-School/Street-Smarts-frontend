import { environment } from './../environments/environment';

export const poolData = {
  UserPoolId: environment.COGNITO_USER_POOL_ID, // Your user pool id here
  ClientId: environment.COGNITO_CLIENT_ID // Your client id here
};

