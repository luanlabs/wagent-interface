import { MethodsNumerical, MethodType } from '@/constants/types';

enum Methods {
  Single = 'single',
  Stream = 'stream',
  Vesting = 'vesting',
}

const Single = 1;
const Stream = 2;
const Vesting = 4;

class Method {
  public static fromString(methods: MethodType[]): MethodsNumerical {
    let combinedMethods = 0;

    for (const method of methods) {
      if (method === Methods.Single) {
        combinedMethods |= Single;
      }

      if (method === Methods.Stream) {
        combinedMethods |= Stream;
      }

      if (method === Methods.Vesting) {
        combinedMethods |= Vesting;
      }
    }

    return combinedMethods as MethodsNumerical;
  }

  public static toString(methods: MethodsNumerical): MethodType[] {
    const convertedMethods: MethodType[] = [];

    if (methods & Single) {
      convertedMethods.push(Methods.Single);
    }

    if (methods & Stream) {
      convertedMethods.push(Methods.Stream);
    }

    if (methods & Vesting) {
      convertedMethods.push(Methods.Vesting);
    }

    return convertedMethods;
  }
}

export default Method;
