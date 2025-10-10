
import react from './react';
import typescript from './typescript';
import nextjs from './nextjs';
import angular from './angular';
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
import rxjs from './rx-js';
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
import haskell from './haskell';
import elixir from './elixir';
import devopsEngineering from './devops-engineering';
import aws from './aws';
import azure from './azure';
import googleCloud from './google-cloud';
import kubernetes from './kubernetes';
import docker from './docker';
import terraform from './terraform';
import ansible from './ansible';
import jenkins from './jenkins';
import cicd from './ci-cd';
import prometheus from './prometheus';
import grafana from './grafana';
import istio from './istio';
import helm from './helm';
import vault from './vault';
import cloudformation from './cloudformation';
import gitops from './gitops';
import serverless from './serverless';
import { AllTech } from '@/lib/tech';

const allTech: AllTech = {
  react,
  typescript,
  nextjs,
  angular,
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
  'rx-js': rxjs,
  node,
  java,
  python,
  golang,
  'c-sharp': csharp,
  rust,
  php,
  kotlin,
  scala,
  erlang,
  haskell,
  elixir,
  'devops-engineering': devopsEngineering,
  aws,
  azure,
  'google-cloud': googleCloud,
  kubernetes,
  docker,
  terraform,
  ansible,
  jenkins,
  'ci-cd': cicd,
  prometheus,
  grafana,
  istio,
  helm,
  vault,
  cloudformation,
  gitops,
  serverless
};

export default allTech;
