
import react from './react';
import typescript from './typescript';
import nextjs from './nextjs';
// import angular from './angular'; // Removed to fix build error
import vue from './vue';
import langchain from './langchain';
import pytorch from './pytorch';
import transformers from './transformers';
import dbt from './dbt';
import snowflake from './snowflake';
import pinia from './pinia';
import remix from './remix';
import svelte from './svelte';
import webAccessibility from './web-accessibility';
// import rxjs from './rx-js'; // Removed to fix build error
import node from './node';
import java from './java';
import python from './python';
import golang from './golang';
import csharp from './c-sharp';
import rust from './rust';
import php from './php';
import kotlin from './kotlin';
import scala from './scala';
import erlang from './erlang';
import { AllTech } from '@/lib/tech';

const allTech: AllTech = {
  react,
  typescript,
  nextjs,
  // angular,
  vue,
  langchain,
  pytorch,
  transformers,
  dbt,
  snowflake,
  pinia,
  remix,
  svelte,
  'web-accessibility': webAccessibility,
  // 'rx-js': rxjs,
  node,
  java,
  python,
  golang,
  'c-sharp': csharp,
  rust,
  php,
  kotlin,
  scala,
  erlang
};

export default allTech;
