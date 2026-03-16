<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [

            [
                'title' => '260GSP',
                'description' => 'MikroTik 260GSP — компактный управляемый гигабитный коммутатор с поддержкой PoE passthrough.',
                'image' => 'images/devices/switch/RB260GSP.png',
                'price' => 7500
            ],

            [
                'title' => 'hEX POE',
                'description' => 'MikroTik hEX PoE — маршрутизатор с 5 гигабитными портами и поддержкой PoE питания.',
                'image' => 'images/devices/router/hEX-POE.png',
                'price' => 14500
            ],

            [
                'title' => 'CRS106-1C-5S',
                'description' => 'MikroTik CRS106 — компактный коммутатор с пятью SFP портами.',
                'image' => 'images/devices/switch/CRS106-1C-5S.png',
                'price' => 18500
            ],

            [
                'title' => 'NetMetal ax',
                'description' => 'MikroTik NetMetal ax — уличная точка доступа Wi-Fi 6 для высокоскоростных сетей.',
                'image' => 'images/devices/ap/Metal-52-ac.png',
                'price' => 28000
            ],

            [
                'title' => 'hEx',
                'description' => 'MikroTik hEX — компактный гигабитный маршрутизатор для дома и офиса.',
                'image' => 'images/devices/router/hEx.png',
                'price' => 7200
            ],

            [
                'title' => 'SXTsq 5 ax',
                'description' => 'MikroTik SXTsq 5 ax — уличная точка доступа Wi-Fi 6 для построения радиомостов.',
                'image' => 'images/devices/ap/SXTsq-5-ax.png',
                'price' => 21000
            ],

            [
                'title' => 'hEXs',
                'description' => 'MikroTik hEX S — маршрутизатор с SFP портом и аппаратным ускорением шифрования.',
                'image' => 'images/devices/router/hEXs.png',
                'price' => 9800
            ],

            [
                'title' => 'CRS310-8G+2S+IN',
                'description' => 'MikroTik CRS310 — управляемый коммутатор с 8 портами 2.5G Ethernet и двумя SFP+.',
                'image' => 'images/devices/switch/CRS310-8G-2S-IN.png',
                'price' => 42000
            ],

            [
                'title' => 'mAP2nd',
                'description' => 'MikroTik mAP 2nd — компактная точка доступа для небольших сетей.',
                'image' => 'images/devices/ap/mAP2nd.png',
                'price' => 5200
            ],

            [
                'title' => 'Metal 52 ac',
                'description' => 'MikroTik Metal 52 ac — мощная уличная точка доступа стандарта 802.11ac.',
                'image' => 'images/devices/ap/Metal-52-ac.png',
                'price' => 17500
            ],

            [
                'title' => 'SXT SA5 ac',
                'description' => 'MikroTik SXT SA5 ac — секторная точка доступа для беспроводных сетей.',
                'image' => 'images/devices/ap/SXT-SA5-ac.png',
                'price' => 15800
            ],

            [
                'title' => 'LHGG LTE7 kit',
                'description' => 'MikroTik LHGG LTE7 kit — LTE модем с направленной антенной для удалённых объектов.',
                'image' => 'images/devices/lte/LHGG-LTE7-kit.png',
                'price' => 19500
            ],

            [
                'title' => 'RB5009UG+S+IN',
                'description' => 'MikroTik RB5009 — высокопроизводительный маршрутизатор для корпоративных сетей.',
                'image' => 'images/devices/router/RB5009UG-S-IN.png',
                'price' => 36000
            ],

            [
                'title' => 'hAP ax²',
                'description' => 'MikroTik hAP ax² — современный Wi-Fi 6 роутер для дома и офиса.',
                'image' => 'images/devices/router/hAP-ax2.png',
                'price' => 16500
            ],

            [
                'title' => 'mAP lite',
                'description' => 'MikroTik mAP lite — миниатюрная точка доступа для IoT устройств.',
                'image' => 'images/devices/ap/mAPite.png',
                'price' => 4200
            ],

            [
                'title' => 'IPC-HDW3449TM-AS-NI',
                'description' => 'Dahua IPC-HDW3449TM — купольная IP камера видеонаблюдения 4MP.',
                'image' => 'images/devices/cam/IPC-HDW3449TM-AS-NI.png',
                'price' => 12500
            ],

            [
                'title' => 'IPC-HFW5849T1P-ASE-LED',
                'description' => 'Dahua IPC-HFW5849T1P — уличная IP камера 8MP с LED подсветкой.',
                'image' => 'images/devices/cam/IPC-HFW5849T1P-ASE-LED.png',
                'price' => 32500
            ],

            [
                'title' => 'IPC-MFW5241T2-E3-ASE',
                'description' => 'Dahua IPC-MFW5241T2 — профессиональная IP камера с интеллектуальной аналитикой.',
                'image' => 'images/devices/cam/IPC-MFW5241T2-E3-ASE.png',
                'price' => 27800
            ],

        ];

        foreach ($products as $product) {
            DB::table('products')->insert([
                'title' => $product['title'],
                'description' => $product['description'],
                'image' => $product['image'],
                'slug' => Str::slug($product['title']),
                'active' => true,
                'price' => $product['price'],
                'hit' => false,
                'remains' => rand(5, 25),
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
