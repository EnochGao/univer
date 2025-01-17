/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { IFunctionInfo } from '@univerjs/engine-formula';
import { FUNCTION_NAMES_STATISTICAL, FunctionType } from '@univerjs/engine-formula';

export const FUNCTION_LIST_STATISTICAL: IFunctionInfo[] = [
    {
        functionName: FUNCTION_NAMES_STATISTICAL.AVERAGE,
        aliasFunctionName: 'formula.functionList.AVERAGE.aliasFunctionName',
        functionType: FunctionType.Statistical,
        description: 'formula.functionList.AVERAGE.description',
        abstract: 'formula.functionList.AVERAGE.abstract',
        functionParameter: [
            {
                name: 'formula.functionList.AVERAGE.functionParameter.number1.name',
                detail: 'formula.functionList.AVERAGE.functionParameter.number1.detail',
                example: 'A1:A20',
                require: 1,
                repeat: 0,
            },
            {
                name: 'formula.functionList.AVERAGE.functionParameter.number2.name',
                detail: 'formula.functionList.AVERAGE.functionParameter.number2.detail',
                example: 'B2:B10',
                require: 0,
                repeat: 1,
            },
        ],
    },
    {
        functionName: FUNCTION_NAMES_STATISTICAL.MAX,
        aliasFunctionName: 'formula.functionList.MAX.aliasFunctionName',
        functionType: FunctionType.Statistical,
        description: 'formula.functionList.MAX.description',
        abstract: 'formula.functionList.MAX.abstract',
        functionParameter: [
            {
                name: 'formula.functionList.MAX.functionParameter.number1.name',
                detail: 'formula.functionList.MAX.functionParameter.number1.detail',
                example: 'A1:A20',
                require: 1,
                repeat: 0,
            },
            {
                name: 'formula.functionList.MAX.functionParameter.number2.name',
                detail: 'formula.functionList.MAX.functionParameter.number2.detail',
                example: 'B2:B10',
                require: 0,
                repeat: 1,
            },
        ],
    },
    {
        functionName: FUNCTION_NAMES_STATISTICAL.COUNT,
        aliasFunctionName: 'formula.functionList.COUNT.aliasFunctionName',
        functionType: FunctionType.Statistical,
        description: 'formula.functionList.COUNT.description',
        abstract: 'formula.functionList.COUNT.abstract',
        functionParameter: [
            {
                name: 'formula.functionList.COUNT.functionParameter.value1.name',
                detail: 'formula.functionList.COUNT.functionParameter.value1.detail',
                example: 'A1:A20',
                require: 1,
                repeat: 0,
            },
            {
                name: 'formula.functionList.COUNT.functionParameter.value2.name',
                detail: 'formula.functionList.COUNT.functionParameter.value2.detail',
                example: 'B2:B10',
                require: 0,
                repeat: 1,
            },
        ],
    },
    {
        functionName: FUNCTION_NAMES_STATISTICAL.MIN,
        aliasFunctionName: 'formula.functionList.MIN.aliasFunctionName',
        functionType: FunctionType.Statistical,
        description: 'formula.functionList.MIN.description',
        abstract: 'formula.functionList.MIN.abstract',
        functionParameter: [
            {
                name: 'formula.functionList.MIN.functionParameter.number1.name',
                detail: 'formula.functionList.MIN.functionParameter.number1.detail',
                example: 'A1:A20',
                require: 1,
                repeat: 0,
            },
            {
                name: 'formula.functionList.MIN.functionParameter.number2.name',
                detail: 'formula.functionList.MIN.functionParameter.number2.detail',
                example: 'B2:B10',
                require: 0,
                repeat: 1,
            },
        ],
    },
    {
        functionName: FUNCTION_NAMES_STATISTICAL.COUNTA,
        aliasFunctionName: 'formula.functionList.COUNTA.aliasFunctionName',
        functionType: FunctionType.Statistical,
        description: 'formula.functionList.COUNT_A.description',
        abstract: 'formula.functionList.COUNT_A.abstract',
        functionParameter: [
            {
                name: 'formula.functionList.COUNT_A.functionParameter.number1.name',
                detail: 'formula.functionList.COUNT_A.functionParameter.number1.detail',
                example: 'A1:A20',
                require: 1,
                repeat: 0,
            },
            {
                name: 'formula.functionList.COUNT_A.functionParameter.number2.name',
                detail: 'formula.functionList.COUNT_A.functionParameter.number2.detail',
                example: 'B2:B10',
                require: 0,
                repeat: 1,
            },
        ],
    },
];
