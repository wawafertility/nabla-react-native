import { Response } from '../../types';
import { NablaError } from '@nabla/react-native-core';
import { NativeError } from '@nabla/react-native-core/lib/internal';
export declare function mapResponse<NativeT, T>(nativeResponse: Response<NativeT, NativeError>, transform: (native: NativeT) => T): Response<T, NablaError>;
