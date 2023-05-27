import axios from 'axios';
type Message = {
    message: string
}
type Res = {
    data : Message
}

async function getMessage() {
    try {
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<Res>(
        'http://localhost:3030',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
  
      console.log(JSON.stringify(data, null, 4));
  
      // 👇️ "response status is: 200"
      console.log('response status is: ', status);
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

async function postGoogleAuthCredentials(credentials: string){
    try {
        // 👇️ const data: CreateUserResponse
        const { data, status } = await axios.post(
          'http://localhost:3030/google-auth',
          {    token : credentials},
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );
    
        console.log(JSON.stringify(data, null, 4));
    
        console.log(status);
    
        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          // 👇️ error: AxiosError<any, any>
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }
export function handleCallbackResponse(response: any): void {
    // getMessage();
    postGoogleAuthCredentials(response.credential);
    // console.log(response.credential);
  }
