import { IsNotEmpty, IsString, ValidateNested, MinLength, MaxLength, IsOptional, IsDate, IsBoolean, IsNumber } from 'class-validator';


export class EnderecoDto {
  
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  logradouro: string;
  
  @IsNotEmpty()
  @IsNumber()
  numero: number;
  
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  bairro: string;
  
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  cidade: string;
  
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @IsString()
  estado: string;

  @IsBoolean()
  @IsOptional()
  novo?: boolean;
}