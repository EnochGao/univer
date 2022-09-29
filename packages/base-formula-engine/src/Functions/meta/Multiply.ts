import { CalculateValueType, FunctionVariantType } from '../../Basics/Common';
import { ErrorType } from '../../Basics/ErrorType';
import { FORMULA_FUNCTION_REGISTRY } from '../../Basics/Registry';
import { ErrorValueObject } from '../../OtherObject/ErrorValueObject';
import { BaseReferenceObject } from '../../ReferenceObject/BaseReferenceObject';
import { ArrayValueObject } from '../../ValueObject/ArrayValueObject';
import { BaseValueObject } from '../../ValueObject/BaseValueObject';
import { NumberValueObject } from '../../ValueObject/NumberValueObject';
import { BaseFunction } from '../BaseFunction';

const FUNCTION_NAME = 'MULTIPLY';

export class Multiply extends BaseFunction {
    get name() {
        return FUNCTION_NAME;
    }

    calculate(variant1: FunctionVariantType, variant2: FunctionVariantType) {
        if (variant1.isErrorObject() || variant2.isErrorObject()) {
            return ErrorValueObject.create(ErrorType.VALUE);
        }

        return (variant1 as BaseValueObject).multiply(variant2 as BaseValueObject);
    }
}

FORMULA_FUNCTION_REGISTRY.add(FUNCTION_NAME, Multiply.create());
