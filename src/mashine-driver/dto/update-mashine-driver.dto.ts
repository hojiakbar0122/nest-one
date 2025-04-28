import { PartialType } from '@nestjs/mapped-types';
import { CreateMashineDriverDto } from './create-mashine-driver.dto';

export class UpdateMashineDriverDto extends PartialType(CreateMashineDriverDto) {}
